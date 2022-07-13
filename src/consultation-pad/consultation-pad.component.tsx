import React from 'react'
import {Modal} from '@carbon/react'
import {CLOSE_CONSULTATION_PAD_CLICK_EVENT} from '../utils/events'

export const ConsultationPad = () => {
  const closeConsultationPad = () => {
    document.dispatchEvent(new Event(CLOSE_CONSULTATION_PAD_CLICK_EVENT))
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
