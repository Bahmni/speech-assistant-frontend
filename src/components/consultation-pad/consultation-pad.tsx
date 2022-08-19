import React from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {Modal} from '@carbon/react'
export const ConsultationPad = ({setConsultationPadToClosed}) => {
  return (
    <>
      <Modal
        modalHeading="Consultation Notes"
        open={true}
        onRequestClose={() => setConsultationPadToClosed(false)}
        passiveModal={true}
      >
        <ConsultationPadContents />
      </Modal>
    </>
  )
}
