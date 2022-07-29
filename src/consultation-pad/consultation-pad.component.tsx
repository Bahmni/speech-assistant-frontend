import React from 'react'
import {Modal} from '@carbon/react'
import SocketConnectionButton from '../socket-connection-button'

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
        <span>
          <SocketConnectionButton />
        </span>
      </Modal>
    </>
  )
}
