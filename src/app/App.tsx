import React from 'react'
import ActiveConsultation from '../components/active-consultation/active-consultation'
import ConsultationContextProvider from '../context/consultation-context'

function App() {
  return (
    <ConsultationContextProvider>
      <ActiveConsultation />
    </ConsultationContextProvider>
  )
}
export default App
