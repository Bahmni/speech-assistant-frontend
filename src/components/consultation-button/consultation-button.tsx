import {Button} from 'carbon-components-react'
import React, {useState} from 'react'
import {ConsultationPad} from '../consultation-pad/consultation-modal'

export const ConsultationButton = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Button
        role="button"
        onClick={() => {
          setShowModal(true)
        }}
      >
        Consultation
      </Button>
      <ConsultationPad showModal={showModal} setShowModal={setShowModal} />
    </>
  )
}
