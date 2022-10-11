import React, {useCallback} from 'react'
import styles from './draggable-box.scss'
import Draggable from 'react-draggable'
import {Subtract} from '@carbon/icons-react'

export function DraggableBox({children, heading, handleMinimize}) {
  const clickMinimizeIcon = useCallback(() => {
    handleMinimize()
  }, [])

  const renderConsultationHeader = () => {
    return (
      <div className={styles.heading}>
        <h4>{heading}</h4>
        <Subtract
          aria-label="minimizeIcon"
          className={styles.minimizeIcon}
          onClick={clickMinimizeIcon}
        />
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
