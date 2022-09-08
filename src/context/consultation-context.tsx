import React, {useCallback, useEffect, useState} from 'react'
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
  const [patientDetails, setPatientDetails] = useState<PatientDetails>({
    patientUuid: '',
    locationUuid: '',
    visitResponse: null,
  })
  let isVisitsLoading = false

  useEffect(() => updatePatientDetails(), [])

  const onUrlChange = useCallback(() => {
    console.dir(patientDetails)
    console.log(isVisitsLoading)
    if (!isVisitsLoading) updatePatientDetails()
  }, [])

  function updatePatientDetails() {
    const patientId = getPatientUuid()
    const locationId = getLocationUuid()

    if (
      patientId &&
      locationId &&
      isPatientOrLocationDifferent(patientId, locationId)
    ) {
      isVisitsLoading = true
      fetchActiveVisits(patientId, locationId).then(data => {
        isVisitsLoading = false
        setPatientDetails({
          patientUuid: patientId,
          locationUuid: locationId,
          visitResponse: data,
        })
      })
    } else if (!(patientId && locationId)) {
      setPatientDetails({
        patientUuid: patientId,
        locationUuid: locationId,
        visitResponse: null,
      })
    }
  }

  function isPatientOrLocationDifferent(patientId, locationId) {
    return (
      patientId !== patientDetails.patientUuid ||
      locationId !== patientDetails.locationUuid
    )
  }

  window.addEventListener('hashchange', onUrlChange)

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
