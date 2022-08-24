import React from 'react'
import styles from './draggable-box.scss'
import Draggable from 'react-draggable'
import {Close} from '@carbon/icons-react'
export const DraggableBox = ({children, heading, handleClose}) => {
  return (
    <Draggable cancel="textarea">
      <div className={styles.draggableBox}>
        <div className={styles.heading}>
          <h4>{heading}</h4>
          <Close
            aria-label="close"
            className={styles.closeIcon}
            onClick={handleClose}
          />
        </div>
        {children}
      </div>
    </Draggable>
  )
}
