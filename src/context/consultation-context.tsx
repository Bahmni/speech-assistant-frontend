import React, {useEffect, useRef, useState} from 'react'
import {getActiveVisitResponse, getProviderUuid} from '../utils/api-utils'
import {
  getActiveConsultationEncounter,
  getConsultationObs,
} from '../utils/encounter-details/encounter-details'
// import {
//   getLocationUuid,
//   getPatientUuid,
// } from '../utils/patient-details/patient-details'

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
      if (consultationObs) {
        const savedData = consultationObs.display.match(
          /Consultation Note: (?<notes>.*)/,
        )[1]
        setSavedConsultationNotes(savedData)
      }
    }
  }

  const updatePatientDetails = async (patientId, locationId) => {
    const activeVisitResponse = await getActiveVisitResponse(
      patientId,
      locationId,
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
const detailsScript = document.getElementById('01');
console.dir("detailsScript === .  " + detailsScript);

  const onUrlChangeCallback = () => {
    setPatientUuid(detailsScript.getAttribute('patientUuid'))// getPatientDetails detailsScript.getAttribute('patientUuid')
    console.log('patientUuid from bundle');
    console.log(detailsScript.getAttribute('patientUuid'));
    console.log('locationUuid from bundle');
    console.log(detailsScript.getAttribute('locationUuid'));
    
  }
  // const onUrlChangeCallback2 = () => {
  //   // setPatientUuid(detailsScript.getAttribute('patientUuid'))// getPatientDetails
  //   console.log('patientUuid from bundle ');
  //   console.log(detailsScript.getAttribute('patientUuid'));
  //   console.log('locationUuid from bundle');
  //   console.log(detailsScript.getAttribute('locationUuid'));
    
  // }

  useEffect(() => {
    setPatientUuid(detailsScript.getAttribute('patientUuid')) //getPatientUuid() detailsScript.getAttribute('patientUuid')
    setLocationUuid(detailsScript.getAttribute('locationUuid')) //getLocationUuid() detailsScript.getAttribute('locationUuid')
    const providerUuidResponse = getProviderUuid()
    providerUuidResponse.then(uuid => {
      providerUuidRef.current = uuid
    })
    window.addEventListener('hashchange', onUrlChangeCallback)
    // window.addEventListener('hashchange', onUrlChangeCallback2)
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
