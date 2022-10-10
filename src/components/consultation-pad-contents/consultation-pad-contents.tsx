import {Button, TextArea} from '@carbon/react'
import React, {useCallback, useContext, useEffect, useState} from 'react'
import {MicrophoneFilled, StopFilled} from '@carbon/icons-react'
import styles from './consultation-pad-contents.scss'
import SocketConnection from '../../utils/socket-connection/socket-connection'
import {streamingURL} from '../../utils/constants'
import {saveConsultationNotes} from './consultation-pad-contents.resources'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import {
  addSaveButtonListener,
  setConsultationNotes,
} from '../bahmni/bahmni-save-button-listener/save-button-listener'

export function ConsultationPadContents({
  closeConsultationPad,
  consultationText,
  setConsultationText,
  setSavedNotes,
}) {
  const [isRecording, setIsRecording] = useState(false)
  const [socketConnection, setSocketConnection] = useState(null)
  const [recordedText, setRecordedText] = useState('')

  const patientDetails: PatientDetails = useContext(ConsultationContext)

  useEffect(() => {
    if (!isRecording && recordedText != '') {
      consultationText
        ? setConsultationText(`${consultationText} ${recordedText}`)
        : setConsultationText(recordedText)
      setRecordedText('')
    }
  }, [isRecording])

  const onIncomingMessage = (message: string) => {
    setRecordedText(message)
  }

  const onRecording = (isRecording: boolean) => {
    setIsRecording(isRecording)
  }

  useEffect(() => {
    setSocketConnection(
      new SocketConnection(streamingURL, onIncomingMessage, onRecording),
    )
    addSaveButtonListener(patientDetails, closeConsultationPad)
  }, [])

  useEffect(() => {
    setConsultationNotes(consultationText)
  }, [consultationText])

  const clickStopMic = useCallback(() => {
    socketConnection.handleStop()
  }, [socketConnection])

  const renderStopMic = () => {
    return (
      <>
        <StopFilled
          className={styles.stopIcon}
          onClick={clickStopMic}
          aria-label="Stop Mic"
        />
        <h6>Listening</h6>
      </>
    )
  }

  const clickStartMic = useCallback(() => {
    socketConnection.handleStart()
  }, [socketConnection])

  const renderStartMic = () => {
    return (
      <>
        <MicrophoneFilled
          className={styles.microphoneIcon}
          onClick={clickStartMic}
          aria-label="Start Mic"
        />
        <h6 className="styles.heading">Start Recording</h6>
      </>
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
    saveConsultationNotes(consultationText, patientDetails)
    setSavedNotes(consultationText)
    closeConsultationPad()
  }, [consultationText])

  return (
    <>
      {renderTextArea()}
      <div className={styles.padBottomArea}>
        {isRecording ? renderStopMic() : renderStartMic()}
        <Button
          className={styles.saveButton}
          disabled={consultationText == '' && recordedText == ''}
          onClick={clickSaveButton}
        >
          Save Notes
        </Button>
      </div>
    </>
  )
}
