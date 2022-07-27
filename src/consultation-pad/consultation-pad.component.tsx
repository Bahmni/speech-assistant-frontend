import React from 'react'
import {Modal} from '@carbon/react'

export const ConsultationPad = ({setShowConsultationPad}) => {
  const closeConsultationPad = () => {
    setShowConsultationPad(false)
  }
  return (
    <>
      <Modal
        modalHeading="Consultation Notes"
        open={true}
        onRequestClose={() => closeConsultationPad()}
        passiveModal={true}
        title="ConsultationPad"
      >
        <span>Hello This is a div</span>
      </Modal>
    </>
  )
}
