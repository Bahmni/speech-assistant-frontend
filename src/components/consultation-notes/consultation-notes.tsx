import {ConsultationPad} from '../consultation-pad/consultation-pad'
import React, {useContext, useState} from 'react'
import {Button} from '@carbon/react'
import {MicrophoneFilled} from '@carbon/icons-react'
import styles from './consultation-notes.scss'
import {ConsultationContext} from '../../context/consultation-context'

const ConsultationNotes = () => {
  const [showConsultationPad, setShowConsultationPad] = useState(false)
  const patientDetails = useContext(ConsultationContext)
  return (
    patientDetails?.activeVisit && (
      <>
        {showConsultationPad ? (
          <ConsultationPad setShowConsultationPad={setShowConsultationPad} />
        ) : (
          <Button
            className={styles.floating}
            onClick={() => setShowConsultationPad(true)}
          >
            <MicrophoneFilled size="20" />
            <div className="consultationPadText">Consultation Pad</div>
          </Button>
        )}
      </>
    )
  )
}

export default ConsultationNotes
