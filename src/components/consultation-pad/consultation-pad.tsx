import React, {useCallback} from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {DraggableBox} from '../draggable-box/draggable-box'

export function ConsultationPad({
  consultationText,
  setConsultationText,
  setShowConsultationPad,
  setSavedNotes,
}) {
  const clickMinimizeIcon = useCallback(() => setShowConsultationPad(false), [])

  return (
    <DraggableBox
      heading="Consultation Notes"
      handleMinimize={clickMinimizeIcon}
    >
      <ConsultationPadContents
        closeConsultationPad={clickMinimizeIcon}
        consultationText={consultationText}
        setConsultationText={setConsultationText}
        setSavedNotes={setSavedNotes}
      />
    </DraggableBox>
  )
}
