import React, {useEffect, useState} from 'react'
import {
  PatientDetails,
  usePatientDetails,
} from '../../context/consultation-context'
import ConsultationNotes from '../consultation-notes/consultation-notes'

function ActiveConsultation() {
  const [isActiveVisit, setIsActiveVisit] = useState(false)
  const patientDetails: PatientDetails = usePatientDetails()

  useEffect(() => {
    setIsActiveVisit(patientDetails?.isActiveVisit)
  }, [patientDetails])

  return (
    isActiveVisit && (
      <div id="sa-consultation">
        <ConsultationNotes />
      </div>
    )
  )
}

export default ActiveConsultation
