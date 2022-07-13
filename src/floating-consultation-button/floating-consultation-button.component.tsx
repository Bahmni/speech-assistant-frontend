import React from 'react'
import styles from './floating-consultation-button.scss'
import {Button} from '@carbon/react'
import {Headset} from '@carbon/icons-react'
import {CONSULTATION_BUTTON_CLICK_EVENT, publish} from '../utils/events'

export const FloatingConsultationButton = () => {
  const launchConsultationPad = () => {
    publish(CONSULTATION_BUTTON_CLICK_EVENT)
  }

  return (
    <>
      <Button
        kind="secondary"
        className={styles.floating}
        renderIcon={Headset}
        onClick={launchConsultationPad}
      >
        Consultation Notes
      </Button>
    </>
  )
}
