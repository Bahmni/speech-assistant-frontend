import React, {useCallback} from 'react'
import {Button} from '@carbon/react'
import styles from './floating-consultation-button.scss'
import {WarningFilled, Document} from '@carbon/icons-react'

export function FloatingConsultationButton({
  isUnsavedNotesPresent,
  setShowConsultationPad,
}) {
  const clickConsultationPadButton = useCallback(() => {
    setShowConsultationPad(true)
  }, [])

  return (
    <Button onClick={clickConsultationPadButton} className={styles.floating}>
      <Document size="25" className={styles.notes} />
      <div>
        {isUnsavedNotesPresent && (
          <WarningFilled
            aria-label="warningFilled"
            className={styles.exclamation}
          />
        )}
      </div>
      <div>Notes</div>
    </Button>
  )
}
