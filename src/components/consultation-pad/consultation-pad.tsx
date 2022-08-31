import React from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {Modal} from '@carbon/react'
import { activeEncounter } from './consultation-pad.resources'
export const ConsultationPad = ({setConsultationPadToClosed}) => {
  activeEncounter()
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
      {/* {activeEncounter()} */}
    </>
  )
}
