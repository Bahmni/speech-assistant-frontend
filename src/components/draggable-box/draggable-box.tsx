import React, {useCallback} from 'react'
import styles from './draggable-box.scss'
import Draggable from 'react-draggable'
import {Close, Subtract} from '@carbon/icons-react'

export function DraggableBox({
  children,
  heading,
  handleClose,
  setConsultationText,
  setSavedNotes,
}) {
  const clickMinimizeIcon = useCallback(() => {
    handleClose()
  }, [])

  const clickCloseIcon = useCallback(() => {
    setConsultationText('')
    setSavedNotes('')
    handleClose()
  }, [])

  const renderConsultationHeader = () => {
    return (
      <div className={styles.heading}>
        <h4>{heading}</h4>
        <div>
          <Subtract
            aria-label="minimizeIcon"
            className={styles.minimizeIcon}
            onClick={clickMinimizeIcon}
          />

          <Close
            aria-label="close"
            className={styles.closeIcon}
            onClick={clickCloseIcon}
          />
        </div>
      </div>
    )
  }
  return (
    <Draggable cancel="textarea">
      <div className={styles.draggableBox}>
        {renderConsultationHeader()}
        {children}
      </div>
    </Draggable>
  )
}
