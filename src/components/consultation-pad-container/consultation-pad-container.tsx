import {Button, TextArea} from '@carbon/react'
import React, {useState} from 'react'
import {MicrophoneFilled, StopFilled} from '@carbon/icons-react'
import styles from './consultation-pad-container.scss'

export const ConsultationPadContainer = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [disableSaveButton, setDisableSaveButton] = useState(true)
  const renderStopMic = () => {
    return (
      <>
        <StopFilled
          className={styles.stopIcon}
          onClick={() => setIsRecording(false)}
          aria-label="Stop Mic"
        />
        <h6> Listening...</h6>
      </>
    )
  }

  const renderStartMic = () => {
    return (
      <>
        <MicrophoneFilled
          className={styles.microphoneIcon}
          onClick={() => setIsRecording(true)}
          aria-label="Start Mic"
        />
        <h6>Start recording</h6>
      </>
    )
  }

  const renderTextArea = () => {
    return (
      <TextArea
        onChange={e => {
          e.target.value.length > 0
            ? setDisableSaveButton(false)
            : setDisableSaveButton(true)
        }}
        labelText=""
        ref={input => input && input.focus()}
      ></TextArea>
    )
  }
  return (
    <>
      {renderTextArea()}
      <div className={styles.padBottomArea}>
        {isRecording ? renderStopMic() : renderStartMic()}
        <Button className={styles.saveButton} disabled={disableSaveButton}>
          Save
        </Button>
      </div>
    </>
  )
}
