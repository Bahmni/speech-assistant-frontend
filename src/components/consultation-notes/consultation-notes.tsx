import React, {useEffect, useState} from 'react'
import {
  PatientDetails,
  usePatientDetails,
  useSavedConsultationNotes,
} from '../../context/consultation-context'
import {ConsultationPad} from '../consultation-pad/consultation-pad'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button'

function ConsultationNotes() {
  const [showConsultationPad, setShowConsultationPad] = useState(false)
  const {savedConsultationNotes} = useSavedConsultationNotes()
  const [consultationText, setConsultationText] = useState(
    savedConsultationNotes,
  )

  const patientDetails: PatientDetails = usePatientDetails()

  useEffect(() => {
    setConsultationText(savedConsultationNotes)
    setShowConsultationPad(false)
  }, [patientDetails])

  return showConsultationPad ? (
    <ConsultationPad
      consultationText={consultationText}
      setConsultationText={setConsultationText}
      setShowConsultationPad={setShowConsultationPad}
    />
  ) : (
    <FloatingConsultationButton
      isUnsavedNotesPresent={
        consultationText !== savedConsultationNotes && consultationText !== ''
      }
      setShowConsultationPad={setShowConsultationPad}
    />
  )
}

export default ConsultationNotes
