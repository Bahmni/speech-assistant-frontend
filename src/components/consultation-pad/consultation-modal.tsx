import React from 'react'
import './consultation-modal.scss'
import {ModalComponents} from '../modal-components/modal-component'
import {Modal} from 'carbon-components-react'
export const ConsultationPad = ({showModal, setShowModal}) => {
  return (
    <>
      {showModal && (
        <div role="consultationModal">
          <Modal
            modalHeading="Consultation Notes"
            open={showModal}
            onRequestClose={() => setShowModal(false)}
            passiveModal={true}
            className="modal"
          >
            <ModalComponents />
          </Modal>
        </div>
      )}
    </>
  )
}
