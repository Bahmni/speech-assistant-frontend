import {ConsultationPad} from '../consultation-pad/consultation-pad.component'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button.component'
import React, {useState} from 'react'
import {ConsultationButton} from '../components/consultation-button/consultation-button'
import SocketConnectionButton from '../socket-connection-button'

const App = () => {
  const [showConsultationPad, setShowConsultationPad] = useState(false)

  return (
    <>
      <ConsultationButton />
      <SocketConnectionButton />
      {showConsultationPad ? (
        <ConsultationPad setShowConsultationPad={setShowConsultationPad} />
      ) : (
        <FloatingConsultationButton
          setShowConsultationPad={setShowConsultationPad}
        ></FloatingConsultationButton>
      )}
    </>
  )
}

export default App
