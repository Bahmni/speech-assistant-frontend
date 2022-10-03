import React, {useEffect, useState} from 'react'
import {getApiCall} from '../utils/api-utils'
import {defaultVisitUrl} from '../utils/constants'
import {
  getLocationUuid,
  getPatientUuid,
} from '../utils/patient-details/patient-details'

export interface PatientDetails {
  patientUuid: string
  locationUuid: string
  isActiveVisit: boolean
}
async function fetchActiveVisits(patiendId, locationId) {
  const activeVisitResponse = await getApiCall(
    defaultVisitUrl(patiendId, locationId),
  )
  return activeVisitResponse?.results?.length > 0 ? true : false
}

export const ConsultationContext = React.createContext({} as PatientDetails)

function ConsultationContextProvider({children}) {
  const [patientDetails, setPatientDetails] = useState<PatientDetails>()
  const [patientUuid, setPatientUuid] = useState('')
  const [locationUuid, setLocationUuid] = useState('')

  useEffect(() => {
    if (patientUuid && locationUuid) {
      const activeVisit = fetchActiveVisits(patientUuid, locationUuid)
      activeVisit.then(response => {
        setPatientDetails({
          patientUuid: patientUuid,
          locationUuid: locationUuid,
          isActiveVisit: response,
        })
      })
    } else {
      setPatientDetails({
        patientUuid: patientUuid,
        locationUuid: locationUuid,
        isActiveVisit: false,
      })
    }
  }, [patientUuid, locationUuid])

  const onUrlChangeCallback = () => {
    setPatientUuid(getPatientUuid)
  }

  useEffect(() => {
    setPatientUuid(getPatientUuid())
    setLocationUuid(getLocationUuid())
    window.addEventListener('hashchange', onUrlChangeCallback)
  }, [])

  return (
    <ConsultationContext.Provider value={patientDetails}>
      {children}
    </ConsultationContext.Provider>
  )
}

export default ConsultationContextProvider
