import React, {useCallback} from 'react'
import {Button} from '@carbon/react'
import styles from './floating-consultation-button.scss'
import {WarningFilled, MicrophoneFilled} from '@carbon/icons-react'

export function FloatingConsultationButton({
  isUnsavedNotesPresent,
  setShowConsultationPad,
}) {
  const clickConsultationPadButton = useCallback(() => {
    setShowConsultationPad(true)
  }, [])

  return (
    <Button onClick={clickConsultationPadButton} className={styles.floating}>
      <div>
        <MicrophoneFilled size="20" className={styles.microPhone} />
        {isUnsavedNotesPresent && (
          <WarningFilled
            aria-label="warningFilled"
            className={styles.exclamation}
          />
        )}
      </div>

      <div className="consultationPadText">Consultation Pad</div>
    </Button>
  )
}
