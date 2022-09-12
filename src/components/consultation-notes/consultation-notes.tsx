import {ConsultationPad} from '../consultation-pad/consultation-pad'
<<<<<<< HEAD
import React, {useCallback, useContext, useState} from 'react'
=======
import React, {useState} from 'react'
>>>>>>> 1b68cdd (BAH-1941 | Saving consultation notes through speech when active encounter is present)
import {Button} from '@carbon/react'
import {MicrophoneFilled} from '@carbon/icons-react'
import styles from './consultation-notes.scss'

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
      <Button onClick={clickConsultationPadButton} className={styles.floating}>
        <MicrophoneFilled size="20" />
        <div className="consultationPadText">Consultation Pad</div>
      </Button>
    ))
  )
}

export default ConsultationNotes
