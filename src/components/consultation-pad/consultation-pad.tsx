import React from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {DraggableBox} from '../draggable-box/draggable-box'

export function ConsultationPad({setShowConsultationPad}) {
  function closeClick() {
    setShowConsultationPad(false)
  }

  return (
    <>
      <DraggableBox heading="Consultation Notes" handleClose={closeClick}>
        <ConsultationPadContents handleClose={closeClick} />
      </DraggableBox>
    </>
  )
}
