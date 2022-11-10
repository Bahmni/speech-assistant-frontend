import {
  usePatientDetails,
  useSavedConsultationNotes,
} from '../../context/consultation-context'
import React, {useCallback, useEffect, useRef, useState} from 'react'
import {PatientDetails} from '../../context/consultation-context'
import {saveConsultationNotes} from '../consultation-pad-contents/consultation-pad-contents.resources'
import {ConsultationPad} from '../consultation-pad/consultation-pad'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button'

function ConsultationNotes() {
  const [showConsultationPad, setShowConsultationPad] = useState(false)
  const {savedConsultationNotes, setSavedConsultationNotes} =
    useSavedConsultationNotes()
  const [consultationText, setConsultationText, consultationTextRef] =
    useStateRef(savedConsultationNotes)
  const patientDetails: PatientDetails = usePatientDetails()

  const handleSaveConsultationNotes = useCallback(() => {
    setShowConsultationPad(false)
    saveConsultationNotes(consultationTextRef.current, patientDetails)
    setSavedConsultationNotes(consultationTextRef.current)
  }, [consultationTextRef, patientDetails])

  useEffect(() => {
    const abortController = new AbortController()

    document.addEventListener(
      'click:saveConsultationNotes',
      handleSaveConsultationNotes,
      abortController,
    )
    return () => {
      abortController.abort()
      document.removeEventListener(
        'click:saveConsultationNotes',
        handleSaveConsultationNotes,
      )
    }
  }, [])

  return showConsultationPad ? (
    <ConsultationPad
      consultationText={consultationText}
      setConsultationText={setConsultationText}
      setShowConsultationPad={setShowConsultationPad}
    />
  ) : (
    <FloatingConsultationButton
      isUnsavedNotesPresent={
        consultationText != savedConsultationNotes && consultationText != ''
      }
      setShowConsultationPad={setShowConsultationPad}
    />
  )
}

const useStateRef = initialState => {
  const [state, _setState] = useState(initialState)
  const ref = useRef(initialState)

  const setState = data => {
    ref.current = data
    _setState(data)
  }

  return [state, setState, ref]
}

export default ConsultationNotes
