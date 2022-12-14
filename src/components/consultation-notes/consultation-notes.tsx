import React, {useCallback, useEffect, useState} from 'react'
import {
  PatientDetails,
  usePatientDetails,
  useSavedConsultationNotes,
} from '../../context/consultation-context'
import {ConsultationPad} from '../consultation-pad/consultation-pad'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button'
import styles from './consultation-notes.scss'
import {ToastNotification} from '@carbon/react'

function ConsultationNotes() {
  const [showConsultationPad, setShowConsultationPad] = useState(false)
  const {savedConsultationNotes} = useSavedConsultationNotes()
  const [consultationText, setConsultationText] = useState(
    savedConsultationNotes,
  )
  const [onSaveSuccess, setOnSaveSuccess] = useState(false)
  const [onSaveFailure, setOnSaveFailure] = useState(false)

  const patientDetails: PatientDetails = usePatientDetails()

  useEffect(() => {
    setConsultationText(savedConsultationNotes)
    setShowConsultationPad(false)
    setOnSaveSuccess(false)
    setOnSaveFailure(false)
  }, [patientDetails])

  const updateConsultationNoteSavedStatus = useCallback(savedStatus => {
    savedStatus ? setOnSaveSuccess(true) : setOnSaveFailure(true)
  }, [])

  const handleClose = useCallback(() => {
    setOnSaveSuccess(false)
    setOnSaveFailure(false)
  }, [])

  const renderNotificationMessage = (
    kind: string,
    title: string,
    timeout: number,
    hideCloseButton: boolean,
    className: unknown,
  ) => {
    return (
      <ToastNotification
        className={className}
        kind={kind}
        title={title}
        timeout={timeout}
        onClose={handleClose}
        hideCloseButton={hideCloseButton}
      />
    )
  }

  return (
    <>
      {showConsultationPad ? (
        <ConsultationPad
          consultationText={consultationText}
          setConsultationText={setConsultationText}
          setShowConsultationPad={setShowConsultationPad}
          updateConsultationNoteSavedStatus={updateConsultationNoteSavedStatus}
        />
      ) : (
        <FloatingConsultationButton
          isUnsavedNotesPresent={
            consultationText !== savedConsultationNotes &&
            consultationText !== ''
          }
          setShowConsultationPad={setShowConsultationPad}
        />
      )}
      <div>
        {onSaveSuccess &&
          renderNotificationMessage(
            'success',
            'Saved notes successfully',
            5000,
            true,
            styles.successToastNotification,
          )}
      </div>
      <div>
        {onSaveFailure &&
          renderNotificationMessage(
            'error',
            'Notes could not be saved',
            0,
            false,
            styles.errorToastNotification,
          )}
      </div>
    </>
  )
}

export default ConsultationNotes
