import {Button, TextArea} from '@carbon/react'
import React, {useState} from 'react'
import {MicrophoneFilled, StopFilled} from '@carbon/icons-react'
import styles from './consultation-pad-components.scss'

export const ConsultationPadComponents = () => {
  const [showMicroPhoneButton, setShowMicroPhoneButton] = useState(true)
  const [showSaveButton, setShowSaveButton] = useState(false)
  const startRecording = () => {
    setShowMicroPhoneButton(!showMicroPhoneButton)
  }
  return (
    <>
      <TextArea
        className={styles.textarea}
        onChange={e => {
          e.target.value.length > 0
            ? setShowSaveButton(true)
            : setShowSaveButton(false)
        }}
        labelText={''}
        role="textArea"
      ></TextArea>

      <div className={styles.test}>
        {showMicroPhoneButton ? (
          <div>
            <Button
              onClick={startRecording}
              className={styles.iconButton}
              role="microPhoneButton"
            >
              <MicrophoneFilled className={styles.icon} />
            </Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={startRecording}
              className={styles.iconButton}
              role="stopButton"
            >
              <StopFilled className={styles.icon} />
            </Button>
          </div>
        )}
        {showSaveButton && (
          <Button className={styles.saveButton} role="saveButton">
            Save
          </Button>
        )}
      </div>
    </>
  )
}
