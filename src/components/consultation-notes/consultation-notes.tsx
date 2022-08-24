import {ConsultationPad} from '../consultation-pad/consultation-pad'
import React, {useState} from 'react'
import {Button} from '@carbon/react'
import {Headset} from '@carbon/icons-react'
import styles from './consultation-notes.scss'
const ConsultationNotes = () => {
  const [showConsultationPad, setShowConsultationPad] = useState(false)

  return (
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
}

export default ConsultationNotes
