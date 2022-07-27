import {Button} from '@carbon/react'
import React, {useState} from 'react'
import {ConsultationPad} from '../consultation-pad/consultation-pad'

export const ConsultationButton = () => {
  const [padIsOpen, setPadIsOpen] = useState(false)
  return (
    <>
      <Button
        onClick={() => {
          setPadIsOpen(true)
        }}
      >
        Consultation
      </Button>
      {padIsOpen && <ConsultationPad setPadIsOpen={setPadIsOpen} />}
    </>
  )
}
