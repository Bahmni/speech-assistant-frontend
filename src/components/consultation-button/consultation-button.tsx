import {Button} from '@carbon/react'
import React, {useState} from 'react'
import {ConsultationPad} from '../consultation-pad/consultation-modal'

export const ConsultationButton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <>
      <Button
        role="button"
        onClick={() => {
          setModalIsOpen(true)
        }}
      >
        Consultation
      </Button>
      <ConsultationPad
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
    </>
  )
}
