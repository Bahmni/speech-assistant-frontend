import React, {useEffect, useRef, useState} from 'react'
import {
  getActiveEncounterDate,
  getEncounters,
  getEncounterTypeUuid,
} from '../components/consultation-pad-contents/consultation-pad-contents.resources'
import {getActiveVisitResponse, getProviderUuid} from '../utils/api-utils'
import {getProviderSpecificActiveConsultationEncounter} from '../utils/encounter-details/encounter-details'
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
  visitUuid: string
}
export const ConsultationContext =
  React.createContext<ConsultationContextProps>(null)

export function usePatientDetails() {
  const context = React.useContext(ConsultationContext)
  return context.patientDetails
}
export function useVisitDetails() {
  const context = React.useContext(ConsultationContext)
  return context.visitUuid
}

export function useSavedConsultationNotes() {
  const context = React.useContext(ConsultationContext)
  return {
    savedConsultationNotes: context.savedConsultationNotes,
    setSavedConsultationNotes: context.setSavedConsultationNotes,
  }
}

function ConsultationContextProvider({children}) {
  const [patientDetails, setPatientDetails] = useState<PatientDetails>()
  const [patientUuid, setPatientUuid] = useState('')
  const [locationUuid, setLocationUuid] = useState('')
  const [savedConsultationNotes, setSavedConsultationNotes] = useState('')
  const providerUuidRef = useRef('')
  const [visitUuid, setVisitUuid] = useState('')

  const getSavedConsultationNotes = (encountersResponse, visitUuId) => {
    const consultationActiveEncounter =
      getProviderSpecificActiveConsultationEncounter(
        encountersResponse,
        visitUuId,
        locationUuid,
        providerUuidRef.current,
      )
    if (consultationActiveEncounter) {
      return consultationActiveEncounter.obs[0].value
    }
    return ''
  }
  const updatePatientDetails = async (patientId, locationId) => {
    const activeVisitResponse = await getActiveVisitResponse(
      patientId,
      locationId,
    )
    const encounterTypeUuid = await getEncounterTypeUuid()

    const fromDate = getActiveEncounterDate()

    const encountersResponse = await getEncounters(
      patientId,
      fromDate,
      encounterTypeUuid,
    )
    const isActiveVisit = activeVisitResponse?.results?.length > 0
    const visitId = activeVisitResponse?.results[0]?.uuid

    setPatientDetails({
      patientUuid,
      locationUuid,
      isActiveVisit,
      providerUuid: providerUuidRef.current,
    })
    setVisitUuid(visitId)
    const savedNotes = getSavedConsultationNotes(encountersResponse, visitId)
    setSavedConsultationNotes(savedNotes)
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
      setVisitUuid('')
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
    visitUuid,
  }

  return (
    <ConsultationContext.Provider value={value}>
      {children}
    </ConsultationContext.Provider>
  )
}

export default ConsultationContextProvider
