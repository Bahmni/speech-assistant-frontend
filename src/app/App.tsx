import React from 'react'
import ConsultationNotes from '../components/consultation-notes/consultation-notes'
import {ConsultationContextProvider} from '../context/consultation-context'

const App = () => (
  <ConsultationContextProvider>
    <ConsultationNotes />
  </ConsultationContextProvider>
)
export default App
