import React, {useCallback} from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {DraggableBox} from '../draggable-box/draggable-box'

export function ConsultationPad({setShowConsultationPad}) {
  const clickCloseButton = useCallback(() => setShowConsultationPad(false), [])

  return (
    <>
      <DraggableBox heading="Consultation Notes" handleClose={clickCloseButton}>
        <ConsultationPadContents closeConsultationPad={clickCloseButton} />
      </DraggableBox>
    </>
  )
}
