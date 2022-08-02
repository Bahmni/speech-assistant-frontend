import {ConsultationPad} from '../consultation-pad/consultation-pad.component'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button.component'
import React, {useState} from 'react'

const App = () => {
  const [showConsultationPad, setShowConsultationPad] = useState(false)

  return (
    <>
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
