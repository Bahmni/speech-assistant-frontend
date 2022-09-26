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

export function ConsultationPadContents({closeConsultationPad}) {
  const [isRecording, setIsRecording] = useState(false)
  const [consultationText, setConsultationText] = useState('')
  const [socketConnection, setSocketConnection] = useState(null)

  const patientDetails: PatientDetails = useContext(ConsultationContext)

  const onIncomingMessage = (message: string) => {
    setConsultationText(message)
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

  const renderStopMic = () => {
    return (
      <>
        <StopFilled
          className={styles.stopIcon}
          onClick={() => socketConnection.handleStop()}
          aria-label="Stop Mic"
        />
        <h6>Listening</h6>
      </>
    )
  }

  const renderStartMic = () => {
    return (
      <>
        <MicrophoneFilled
          className={styles.microphoneIcon}
          onClick={() => socketConnection.handleStart()}
          aria-label="Start Mic"
        />
        <h6 className="styles.heading">Start Recording</h6>
      </>
    )
  }

  const renderTextArea = () => {
    return (
      <TextArea
        onChange={event => setConsultationText(event.target.value)}
        labelText=""
        ref={input => input && input.focus()}
        value={consultationText}
        style={{backgroundColor: 'white'}}
      ></TextArea>
    )
  }

  const clickSaveButton = useCallback(() => {
    saveConsultationNotes(consultationText, patientDetails)
    closeConsultationPad()
  }, [consultationText])

  return (
    <>
      {renderTextArea()}
      <div className={styles.padBottomArea}>
        {isRecording ? renderStopMic() : renderStartMic()}
        <Button
          className={styles.saveButton}
          disabled={consultationText == ''}
          onClick={clickSaveButton}
        >
          Save Notes
        </Button>
      </div>
    </>
  )
}
