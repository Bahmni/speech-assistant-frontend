import {bahmniSaveButtonResponseTime} from '../../../utils/constants'
import {saveConsultationNotes} from '../../consultation-pad-contents/consultation-pad-contents.resources'

let consultationNotes = ''

export const setConsultationNotes = value => {
  consultationNotes = value
}

let saveButton = null

const onBahmniSaveButtonClick = (patientDetails, closeConsultationPad) => {
  setTimeout(() => {
    saveConsultationNotes(consultationNotes, patientDetails)
    closeConsultationPad()
  }, bahmniSaveButtonResponseTime)
}

const addBahmniSaveButtonListener = (patientDetails, closeConsultationPad) => {
  const bahmniSaveButton = document
    .getElementsByClassName('confirm save-consultation')
    .item(0)

  if (bahmniSaveButton !== null) {
    if (saveButton === null) {
      saveButton = bahmniSaveButton
      saveButton.addEventListener('click', () =>
        onBahmniSaveButtonClick(patientDetails, closeConsultationPad),
      )
    }
  } else {
    saveButton = null
  }
}

export const addSaveButtonListener = (patientDetails, closeConsultationPad) => {
  window.addEventListener('hashchange', () =>
    addBahmniSaveButtonListener(patientDetails, closeConsultationPad),
  )
}
