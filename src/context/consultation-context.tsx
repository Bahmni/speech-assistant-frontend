import React, {useState} from 'react'

export interface PatientDetails {
  patientUuid: string
  location: string
  visitResponse: any
}

export const ConsultationContext = React.createContext({})

export function ConsultationContextProvider({children}) {
  const [patientDetails, setPatientDetails] = useState<PatientDetails>()

  const contextValue = {
    patientDetails,
    setPatientDetails,
  }
  return (
    <ConsultationContext.Provider value={contextValue}>
      {children}
    </ConsultationContext.Provider>
  )
}
export default ConsultationContextProvider
