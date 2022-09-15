import React from 'react'
import ConsultationNotes from '../components/consultation-notes/consultation-notes'
import ConsultationContextProvider from '../context/consultation-context'

function App() {
  return (
    <ConsultationContextProvider>
      <ConsultationNotes />
    </ConsultationContextProvider>
  )
}
export default App
