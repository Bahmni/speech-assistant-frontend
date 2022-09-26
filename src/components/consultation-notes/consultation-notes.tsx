import {ConsultationPad} from '../consultation-pad/consultation-pad'
import React, {useCallback, useContext, useState} from 'react'
import {Button} from '@carbon/react'
import {MicrophoneFilled} from '@carbon/icons-react'
import styles from './consultation-notes.scss'
import {ConsultationContext} from '../../context/consultation-context'

function ConsultationNotes() {
  const [showConsultationPad, setShowConsultationPad] = useState(false)
  const patientDetails = useContext(ConsultationContext)

  const clickConsultationPadButton = useCallback(
    () => setShowConsultationPad(true),
    [],
  )

  return (
    patientDetails?.activeVisit &&
    (showConsultationPad ? (
      <ConsultationPad setShowConsultationPad={setShowConsultationPad} />
    ) : (
      <Button
        id="consultationButton"
        onClick={clickConsultationPadButton}
        className={styles.floating}
      >
        <MicrophoneFilled size="20" />
        <div className="consultationPadText">Consultation Pad</div>
      </Button>
    ))
  )
}

export default ConsultationNotes
