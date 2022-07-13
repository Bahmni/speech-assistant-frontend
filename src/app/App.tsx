import {ConsultationPad} from '../consultation-pad/consultation-pad.component'
import {FloatingConsultationButton} from '../floating-consultation-button/floating-consultation-button.component'
import styles from './app.scss'
import React, {useEffect, useState} from 'react'
import {
  CLOSE_CONSULTATION_PAD_CLICK_EVENT,
  CONSULTATION_BUTTON_CLICK_EVENT,
  subscribe,
  unsubscribe,
} from '../utils/events'

const App = () => {
  const [showConsultationButton, shouldShowConsultationButton] = useState(true)
  const [showConsultationPad, shouldShowConsultationPad] = useState(false)

  useEffect(() => {
    subscribe(CONSULTATION_BUTTON_CLICK_EVENT, () => {
      shouldShowConsultationPad(true), shouldShowConsultationButton(false)
    })
    subscribe(CLOSE_CONSULTATION_PAD_CLICK_EVENT, () => {
      shouldShowConsultationButton(true), shouldShowConsultationPad(false)
    })
    return () => {
      unsubscribe(CONSULTATION_BUTTON_CLICK_EVENT)
      unsubscribe(CLOSE_CONSULTATION_PAD_CLICK_EVENT)
    }
  }, [])
  return (
    <>
      <div className={styles.abc}>Hello World !!</div>
      {showConsultationButton && <FloatingConsultationButton />}
      {showConsultationPad && <ConsultationPad />}
    </>
  )
}

export default App
