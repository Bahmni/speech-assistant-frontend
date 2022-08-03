import React from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {Modal} from '@carbon/react'
export const ConsultationPad = ({isConsultationPadClosed}) => {
  return (
    <>
      <Modal
        modalHeading="Consultation Notes"
        open={true}
        onRequestClose={() => isConsultationPadClosed(true)}
        passiveModal={true}
      >
        <ConsultationPadContents />
      </Modal>
    </>
  )
}
