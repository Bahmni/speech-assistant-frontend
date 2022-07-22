import {Button, TextArea} from '@carbon/react'
import React, {useState} from 'react'
import {MicrophoneFilled, StopFilled} from '@carbon/icons-react'
import styles from './consultation-pad-components.scss'

export const ConsultationPadComponents = () => {
  const [showMicroPhoneButton, setShowMicroPhoneButton] = useState(true)
  const [disableSaveButton, setDisableSaveButton] = useState(true) //disablesavebutton,enable
  const startRecording = () => {
    setShowMicroPhoneButton(!showMicroPhoneButton)
  }
  return (
    <>
      <TextArea
        onChange={e => {
          e.target.value.length > 0
            ? setDisableSaveButton(false)
            : setDisableSaveButton(true)
        }}
        labelText={''}
        role="textArea"
      ></TextArea>
      <div className={styles.test}>
        {showMicroPhoneButton ? (
          <MicrophoneFilled className={styles.icon} onClick={startRecording} title="microPhoneIcon" />
        ) : (
          <StopFilled className={styles.icon} onClick={startRecording} title="stopIcon" />
        )}
        {disableSaveButton ? (
          <Button
            className={styles.saveButton}
            role="saveButton"
            disabled={disableSaveButton}
          >
            Save
          </Button>
        ) : (
          <Button
            className={styles.saveButton}
            role="saveButton"
            enabled={disableSaveButton.toString()}
          >
            Save
          </Button>
        )}
      </div>
    </>
  )
}
