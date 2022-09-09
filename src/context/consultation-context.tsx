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
  activeVisit
}
async function fetchActiveVisits(patiendId, locationId) {
  const activeVisitResponse = await getApiCall(visitUrl(patiendId, locationId))
  return activeVisitResponse?.results?.length > 0
    ? activeVisitResponse?.results[0]
    : null
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
          activeVisit: visit,
        })
      })
    } else {
      setPatientDetails({
        patientUuid: patientUuid,
        locationUuid: locationUuid,
        activeVisit: null,
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

export default ConsultationContextProvider
