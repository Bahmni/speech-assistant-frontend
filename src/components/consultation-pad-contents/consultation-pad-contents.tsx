import {TextArea, Button} from '@carbon/react'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {MicrophoneFilled, StopFilled} from '@carbon/icons-react'
import styles from './consultation-pad-contents.scss'
import SocketConnection from '../../utils/socket-connection/socket-connection'
import {streamingURL} from '../../utils/constants'
import {saveConsultationNotes} from './consultation-pad-contents.resources'

import {
  PatientDetails,
  usePatientDetails,
  useSavedConsultationNotes,
  useVisitDetails,
} from '../../context/consultation-context'
import {
  addSaveButtonListener,
  setConsultationNotes,
} from '../bahmni/bahmni-save-button-listener/save-button-listener'

export function ConsultationPadContents({
  closeConsultationPad,
  consultationText,
  setConsultationText,
  updateConsultationNoteSavedStatus,
}) {
  const [isRecording, setIsRecording] = useState(false)
  const [recordedText, setRecordedText] = useState('')

  const patientDetails: PatientDetails = usePatientDetails()
  const {setSavedConsultationNotes} = useSavedConsultationNotes()

  const visitUuid = useVisitDetails()
  const consultationTextRef = useRef(null)
  const recordedTextRef = useRef(null)
  const isRecordingRef = useRef(null)
  const socketConnectionRef = useRef(null)

  consultationTextRef.current = consultationText
  recordedTextRef.current = recordedText
  isRecordingRef.current = isRecording

  useEffect(() => {
    if (!isRecording && recordedText !== '') {
      consultationText
        ? setConsultationText(`${consultationText} ${recordedText}`)
        : setConsultationText(recordedText)
      setRecordedText('')
    }
  }, [isRecording])

  const onIncomingMessage = (message: string) => {
    setRecordedText(message)
  }

  const onRecording = (isRecordingInProgress: boolean) => {
    setIsRecording(isRecordingInProgress)
  }

  useEffect(() => {
    socketConnectionRef.current = new SocketConnection(
      streamingURL,
      onIncomingMessage,
      onRecording,
    )
    addSaveButtonListener(
      patientDetails,
      closeConsultationPad,
      setSavedConsultationNotes,
      visitUuid,
    )
    return () => {
      if (isRecordingRef.current) {
        if (recordedTextRef.current !== '') {
          const updatedText = consultationTextRef.current
            ? `${consultationTextRef.current} ${recordedTextRef.current}`
            : recordedTextRef.current

          setConsultationText(updatedText)
          setConsultationNotes(updatedText)
        }
        socketConnectionRef.current.handleStop()
      }
    }
  }, [])

  useEffect(() => {
    setConsultationNotes(consultationText)
  }, [consultationText])

  const clickStopMic = useCallback(() => {
    socketConnectionRef.current.handleStop()
  }, [])

  const renderStopMic = () => {
    return (
      <Button onClick={clickStopMic} className={styles.button}>
        <StopFilled className={styles.stopIcon} aria-label="Stop Mic" />
        <span className={styles.pulse} />
        <h6 className={styles.listening}>Listening</h6>
      </Button>
    )
  }

  const clickStartMic = useCallback(() => {
    socketConnectionRef.current.handleStart()
  }, [])

  const renderStartMic = () => {
    return (
      <Button onClick={clickStartMic} className={styles.button}>
        <MicrophoneFilled
          className={styles.microphoneIcon}
          aria-label="Start Mic"
        />
        <h6 className={styles.startRecording}>Start Recording</h6>
      </Button>
    )
  }

  const appendRecordedText = () => {
    return consultationText
      ? `${consultationText} ${recordedText}`
      : recordedText
  }

  const setCursorAtEnd = useCallback(event => {
    const textLength = event.currentTarget.value.length
    event.currentTarget.setSelectionRange(textLength, textLength)
  }, [])

  const setText = useCallback(event => {
    setConsultationText(event.target.value)
  }, [])

  const focusTextarea = useCallback(
    input => {
      input && input.focus()
    },
    [isRecording],
  )

  const renderTextArea = () => {
    return (
      <TextArea
        onChange={setText}
        labelText=""
        ref={focusTextarea}
        value={recordedText ? appendRecordedText() : consultationText}
        style={{backgroundColor: 'white'}}
        onFocus={setCursorAtEnd}
        readOnly={isRecording}
      />
    )
  }

  const clickSaveButton = useCallback(() => {
    const saveConsultationNotesResponse = saveConsultationNotes(
      consultationText,
      patientDetails,
      visitUuid,
    )
    saveConsultationNotesResponse.then(response => {
      if (response.ok) {
        setSavedConsultationNotes(consultationText)
        closeConsultationPad()
        updateConsultationNoteSavedStatus(true)
      } else {
        updateConsultationNoteSavedStatus(false)
      }
    })
  }, [consultationText])

  const onDisable = () => {
    return (consultationText === '' && recordedText === '') || isRecording
  }

  return (
    <>
      {renderTextArea()}
      <div className={styles.padBottomArea}>
        {isRecording ? renderStopMic() : renderStartMic()}
        <Button
          className={styles.saveButton}
          disabled={onDisable()}
          onClick={clickSaveButton}
        >
          Save Notes
        </Button>
      </div>
    </>
  )
}
