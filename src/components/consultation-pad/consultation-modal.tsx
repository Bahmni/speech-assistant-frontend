import {Button, Modal, TextArea} from 'carbon-components-react'
import React, {useState} from 'react'
import {MicrophoneFilled, StopFilled, PauseOutline} from '@carbon/icons-react'

export const ConsultationPad = () => {
  const [showModal, setShowModal] = useState(false)
  const [startRecord, setStartRecord] = useState(false)
  const StartRecording = () => {
    setStartRecord(true)
  }
  return (
    <>
      <Button
        onClick={() => {
          setShowModal(true)
        }}
      >
        Consultation
      </Button>
      {showModal && (
        <div>
          <Modal
            modalHeading="Consultation Notes"
            open={showModal}
            onRequestClose={() => setShowModal(false)}
          >
            <TextArea labelText={''}>Consultation Notes</TextArea>

            {!startRecord ? (
              <div className="alignment">
                <Button onClick={StartRecording}>
                  <MicrophoneFilled className="icon" />
                </Button>
              </div>
            ) : (
              <div>
                <PauseOutline className="icon" />
                <StopFilled className="icon" />
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  )
}
