import {ConsultationPad} from '../consultation-pad/consultation-pad'
import React, {useContext, useState} from 'react'
import {Button} from '@carbon/react'
import {Headset} from '@carbon/icons-react'
import styles from './consultation-notes.scss'
import {ConsultationContext} from '../../context/consultation-context'
import {fetchActiveVisits} from './consultation-notes.resources'

const ConsultationNotes = () => {
  // const [visitResponse, setVisitResponse] = useState(null)
  const [showConsultationPad, setShowConsultationPad] = useState(false)
  let {patientDetails, setPatientDetails}: any = useContext(ConsultationContext)

  fetchActiveVisits(setPatientDetails)

  return (
    patientDetails && (
      <>
        {showConsultationPad ? (
          <ConsultationPad setShowConsultationPad={setShowConsultationPad} />
        ) : (
          <Button
            kind="secondary"
            className={styles.floating}
            renderIcon={Headset}
            onClick={() => setShowConsultationPad(true)}
          >
            Consultation Notes
          </Button>
        )}
      </>
    )
  )
}

export default ConsultationNotes
