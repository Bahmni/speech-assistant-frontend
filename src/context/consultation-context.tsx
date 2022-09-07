import React, {useState} from 'react'

export interface PatientDetails {
  patientUuid: string
  locationUuid: string
  visitResponse: any
}

export const ConsultationContext = React.createContext(null)

export const ConsultationContextProvider = ({children}) => {
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
