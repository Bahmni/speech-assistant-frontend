import {Button, TextArea} from 'carbon-components-react'
import React, {useState} from 'react'
import {MicrophoneFilled, StopFilled, PauseOutline} from '@carbon/icons-react'
import './modal-components.scss'

export const ModalComponents = () => {
  const [startRecord, setStartRecord] = useState(false)
  const startRecording = () => {
    setStartRecord(!startRecord)
  }
  return (
    <>
      <TextArea labelText={''} className="textarea" role="textarea">
        Consultation Notes
      </TextArea>
      <div className="modalFooter">
        {startRecord ? (
          <div>
            <Button
              onClick={startRecording}
              className="stopButton button"
              role="button"
            >
              <StopFilled className="icon" />
            </Button>
            <Button className="pauseButton button" role="button">
              <PauseOutline className="icon" />
            </Button>
            <Button className="saveButton" role="button">
              Save
            </Button>
          </div>
        ) : (
          <div>
            <Button
              onClick={startRecording}
              className="microphoneButton button"
            >
              <MicrophoneFilled className="icon" />
            </Button>
            <Button className="saveButton" role="button">
              Save
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
