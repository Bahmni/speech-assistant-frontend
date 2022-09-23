import React, {useCallback} from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {DraggableBox} from '../draggable-box/draggable-box'

export function ConsultationPad({
  consultationText,
  setConsultationText,
  setShowConsultationPad,
}) {
  const clickCloseButton = useCallback(() => setShowConsultationPad(false), [])

  return (
    <>
      <DraggableBox heading="Consultation Notes" handleClose={closeClick}>
        <ConsultationPadContents
          consultationText={consultationText}
          setConsultationText={setConsultationText}
        />
      </DraggableBox>
    </>
  )
}
