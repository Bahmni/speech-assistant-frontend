import React, {useState} from 'react'
import {ConsultationPad} from '../consultation-pad/consultation-pad'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button'

function ConsultationNotes() {
  const [showConsultationPad, setShowConsultationPad] = useState(false)
  const [consultationText, setConsultationText] = useState('')
  const [savedNotes, setSavedNotes] = useState('')

  return showConsultationPad ? (
    <ConsultationPad
      consultationText={consultationText}
      setConsultationText={setConsultationText}
      setShowConsultationPad={setShowConsultationPad}
      setSavedNotes={setSavedNotes}
    />
  ) : (
    <FloatingConsultationButton
      isUnsavedNotesPresent={
        consultationText != savedNotes && consultationText != ''
      }
      setShowConsultationPad={setShowConsultationPad}
    />
  )
}

export default ConsultationNotes
