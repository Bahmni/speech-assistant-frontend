import React, {useEffect, useRef, useState} from 'react'
import {getApiCall} from '../utils/api-utils'
import {visitUrl, sessionUrl} from '../utils/constants'
import {
  getActiveConsultationEncounter,
  getConsultationObs,
} from '../utils/encounter-details/encounter-details'
import {
  getLocationUuid,
  getPatientUuid,
} from '../utils/patient-details/patient-details'

export interface PatientDetails {
  patientUuid: string
  locationUuid: string
  isActiveVisit: boolean
  providerUuid: string
}

export interface ConsultationContextProps {
  patientDetails: PatientDetails
  savedConsultationNotes: string
  setSavedConsultationNotes: React.Dispatch<React.SetStateAction<string>>
}

export const ConsultationContext =
  React.createContext<ConsultationContextProps>(null)

async function fetchActiveVisitResponse(patiendId, locationId) {
  const activeVisitResponse = await getApiCall(visitUrl(patiendId, locationId))
  return activeVisitResponse
}

export function usePatientDetails() {
  const context = React.useContext(ConsultationContext)
  return context.patientDetails
}

export function useSavedConsultationNotes() {
  const context = React.useContext(ConsultationContext)
  return {
    savedConsultationNotes: context.savedConsultationNotes,
    setSavedConsultationNotes: context.setSavedConsultationNotes,
  }
}

async function getProviderUuid() {
  const response = await getApiCall(sessionUrl)
  return response?.currentProvider?.uuid
}

function ConsultationContextProvider({children}) {
  const [patientDetails, setPatientDetails] = useState<PatientDetails>()
  const [patientUuid, setPatientUuid] = useState('')
  const [locationUuid, setLocationUuid] = useState('')
  const [savedConsultationNotes, setSavedConsultationNotes] = useState('')
  const providerUuidRef = useRef('')

  const updateSavedConsultationNotes = activeVisitResponse => {
    const consultationActiveEncounter =
      getActiveConsultationEncounter(activeVisitResponse)

    if (consultationActiveEncounter) {
      const consultationObs = getConsultationObs(consultationActiveEncounter)
      const matcher = new RegExp(`Consultation Note: (?<notes>.*)`)
      if (consultationObs) {
        const savedData = matcher.exec(consultationObs.display).groups?.notes
        setSavedConsultationNotes(savedData)
      }
    }
  }

  const updatePatientDetails = async (patientUuid, locationUuid) => {
    const activeVisitResponse = await fetchActiveVisitResponse(
      patientUuid,
      locationUuid,
    )
    const isActiveVisit = activeVisitResponse?.results?.length > 0

    if (isActiveVisit) {
      setPatientDetails({
        patientUuid,
        locationUuid,
        isActiveVisit,
        providerUuid: providerUuidRef.current,
      })
      updateSavedConsultationNotes(activeVisitResponse)
    }
  }

  useEffect(() => {
    if (patientUuid && locationUuid) {
      updatePatientDetails(patientUuid, locationUuid)
    } else {
      setPatientDetails({
        patientUuid,
        locationUuid,
        isActiveVisit: false,
        providerUuid: providerUuidRef.current,
      })
      setSavedConsultationNotes('')
    }
  }, [patientUuid, locationUuid])

  const onUrlChangeCallback = () => {
    setPatientUuid(getPatientUuid)
  }

  useEffect(() => {
    setPatientUuid(getPatientUuid())
    setLocationUuid(getLocationUuid())
    const providerUuidResponse = getProviderUuid()
    providerUuidResponse.then(uuid => {
      providerUuidRef.current = uuid
    })
    window.addEventListener('hashchange', onUrlChangeCallback)
  }, [])

  const value = {
    patientDetails,
    savedConsultationNotes,
    setSavedConsultationNotes,
  }

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  )
}

export default ConsultationContextProvider
