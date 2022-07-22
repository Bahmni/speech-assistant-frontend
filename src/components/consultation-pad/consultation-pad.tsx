import React from 'react'
import {ConsultationPadComponents} from '../consultation-pad-components/consultation-pad-components'
import {Modal} from '@carbon/react'
export const ConsultationPad = ({modalIsOpen, setModalIsOpen}) => {
  return (
    <>
      {modalIsOpen && (
        <div role="consultationModal">
          <Modal
            modalHeading="Consultation Notes"
            open={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            passiveModal={true}
            title="ConsultationPad"
          >
            <ConsultationPadComponents />
          </Modal>
        </div>
      )}
    </>
  )
}
