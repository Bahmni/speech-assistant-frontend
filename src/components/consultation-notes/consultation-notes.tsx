import {ConsultationPad} from '../consultation-pad/consultation-pad'
import React, {useContext, useState} from 'react'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button'
import {ConsultationContext} from '../../context/consultation-context'

const ConsultationNotes = () => {
  const [showConsultationPad, setShowConsultationPad] = useState(false)

  const patientDetails = useContext(ConsultationContext)

  const [consultationText, setConsultationText] = useState('')

  return showConsultationPad ? (
    <ConsultationPad
      consultationText={consultationText}
      setConsultationText={setConsultationText}
      setShowConsultationPad={setShowConsultationPad}
    />
  ) : (
    <FloatingConsultationButton
      isConsulationTextPresent={consultationText != ''}
      setShowConsultationPad={setShowConsultationPad}
    />
  )
}

export default ConsultationNotes
