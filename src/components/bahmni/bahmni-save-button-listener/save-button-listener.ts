import {bahmniSaveButtonResponseTime} from '../../../utils/constants'
import {saveConsultationNotes} from '../../consultation-pad-contents/consultation-pad-contents.resources'

let consultationNotes = ''

export const setConsultationNotes = value => {
  consultationNotes = value
}

let saveButton = null

const setSaveButton = value => {
  saveButton = value
}

const onClick = (patientDetails, handleClose) => {
  setTimeout(() => {
    saveConsultationNotes(consultationNotes, patientDetails)
    handleClose()
  }, bahmniSaveButtonResponseTime)
}

const addBahmniSaveButtonListener = (patientDetails, handleClose) => {
  const bahmniSaveButton = document
    .getElementsByClassName('confirm save-consultation')
    .item(0)
  if (!bahmniSaveButton) setSaveButton(null)

  if (bahmniSaveButton !== null && saveButton === null) {
    setSaveButton(bahmniSaveButton)
    saveButton?.addEventListener('click', () =>
      onClick(patientDetails, handleClose),
    )
  }
}

export const addSaveButtonListener = (patientDetails, handleClose) => {
  window.addEventListener('hashchange', () =>
    addBahmniSaveButtonListener(patientDetails, handleClose),
  )
}
