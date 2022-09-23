import React from 'react'
import {Button} from '@carbon/react'
import styles from './floating-consultation-button.scss'
import {WarningFilled, MicrophoneFilled} from '@carbon/icons-react'

export const FloatingConsultationButton = ({
  isConsulationTextPresent,
  setShowConsultationPad,
}) => {
  function clickConsultationPadButton() {
    setShowConsultationPad(true)
  }

  return (
    <>
      <Button onClick={clickConsultationPadButton} className={styles.floating}>
        <div>
          <MicrophoneFilled
            size="20"
            className={styles.microPhone}
          ></MicrophoneFilled>
          {isConsulationTextPresent && (
            <WarningFilled
              aria-label="warningFilled"
              className={styles.exclamation}
            />
          )}
        </div>

        <div className="consultationPadText">Consultation Pad</div>
      </Button>
    </>
  )
}
