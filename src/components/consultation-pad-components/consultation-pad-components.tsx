import {Button, TextArea} from '@carbon/react'
import React, {useRef, useState} from 'react'
import {MicrophoneFilled, StopFilled} from '@carbon/icons-react'
import styles from './consultation-pad-components.scss'

export const ConsultationPadComponents = () => {
  const input1 = useRef(null)
  const [showMicroPhoneIcon, setShowMicroPhoneIcon] = useState(true)
  const [disableSaveButton, setDisableSaveButton] = useState(true) //disablesavebutton,enable
  const startRecording = () => {
    setShowMicroPhoneIcon(!showMicroPhoneIcon)
    showMicroPhoneIcon ? input1.current.focus() : input1.current.unfocus()
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
        ref={input1}
      ></TextArea>
      <div className={styles.test}>
        {showMicroPhoneIcon ? (
          <>
            <MicrophoneFilled
              className={styles.microphoneIcon}
              onClick={startRecording}
              title="microPhoneIcon"
            />
            <h6>Start recording</h6>
          </>
        ) : (
          <>
            <StopFilled
              className={styles.stopIcon}
              onClick={startRecording}
              title="stopIcon"
            />
            <h6> Listening...</h6>
          </>
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

// import {useRef} from 'react';

// const App = () => {
//   const ref = useRef(null);

//   const handleClick = () => {
//     ref.current.focus();
//   };

//   return (
//     <div>
//       <input ref={ref} id="message" name="message" />

//       <hr />

//       <button onClick={handleClick}>Focus input</button>
//     </div>
//   );
// };

// export default App;
