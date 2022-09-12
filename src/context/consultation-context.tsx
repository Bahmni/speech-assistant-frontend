import React, {useEffect, useState} from 'react'
import {getApiCall} from '../utils/api-utils'
import {visitUrl} from '../utils/constants'
import {
  getLocationUuid,
  getPatientUuid,
} from '../utils/patient-details/patient-details'

export interface PatientDetails {
  patientUuid: string
  locationUuid: string
  visitResponse: any
}

export const ConsultationContext = React.createContext({} as PatientDetails)

function ConsultationContextProvider({children}) {
  const [patientDetails, setPatientDetails] = useState<PatientDetails>()
  const [patientUuid, setPatientUuid] = useState('')
  const [locationUuid, setLocationUuid] = useState('')

  useEffect(() => {
    if (patientUuid && locationUuid) {
      const activeVisit = fetchActiveVisits(patientUuid, locationUuid)
      activeVisit.then(visit => {
        setPatientDetails({
          patientUuid: patientUuid,
          locationUuid: locationUuid,
          visitResponse: visit,
        })
      })
    } else {
      setPatientDetails({
        patientUuid: patientUuid,
        locationUuid: locationUuid,
        visitResponse: null,
      })
    }
  }, [patientUuid, locationUuid])

  useEffect(() => {
    setPatientUuid(getPatientUuid())
    setLocationUuid(getLocationUuid())
  }, [])

  window.addEventListener('hashchange', () => {
    setPatientUuid(getPatientUuid())
  })

  return (
    <ConsultationContext.Provider value={patientDetails}>
      {children}
    </ConsultationContext.Provider>
  )
}

async function fetchActiveVisits(patiendId, locationId) {
  const activeVisitResponse = await getApiCall(visitUrl(patiendId, locationId))
  return activeVisitResponse?.results?.length > 0
    ? activeVisitResponse?.results[0]
    : null
}

export default ConsultationContextProvider