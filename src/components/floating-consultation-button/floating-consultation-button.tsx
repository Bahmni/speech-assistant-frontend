import React from 'react'
import styles from './floating-consultation-button.scss'
import {Button} from '@carbon/react'
import {Headset} from '@carbon/icons-react'

export const FloatingConsultationButton = ({buttonVisibility}) => {
  const launchConsultationPad = () => {
    buttonVisibility(false)
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
