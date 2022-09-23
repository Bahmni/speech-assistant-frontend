import React, {useCallback} from 'react'
import {ConsultationPadContents} from '../consultation-pad-contents/consultation-pad-contents'
import {DraggableBox} from '../draggable-box/draggable-box'

export function ConsultationPad({
  consultationText,
  setConsultationText,
  setShowConsultationPad,
  setSavedNotes,
}) {
  const clickCloseButton = useCallback(() => setShowConsultationPad(false), [])

  return (
    <DraggableBox
      heading="Consultation Notes"
      handleClose={clickCloseButton}
      setConsultationText={setConsultationText}
      setSavedNotes={setSavedNotes}
    >
      <ConsultationPadContents
        closeConsultationPad={clickCloseButton}
        consultationText={consultationText}
        setConsultationText={setConsultationText}
        setSavedNotes={setSavedNotes}
      />
    </DraggableBox>
  )
}
