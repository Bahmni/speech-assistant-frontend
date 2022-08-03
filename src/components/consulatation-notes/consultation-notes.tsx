import {ConsultationPad} from '../consultation-pad/consultation-pad'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button'
import React, {useState} from 'react'

const ConsultationNotes = () => {
  const [showFloatingButton, setShowFloatingButton] = useState(true)

  return (
    <>
      {showFloatingButton ? (
        <FloatingConsultationButton
          buttonVisibility={setShowFloatingButton}
        ></FloatingConsultationButton>
      ) : (
        <ConsultationPad isConsultationPadClosed={setShowFloatingButton} />
      )}
    </>
  )
}

export default ConsultationNotes
