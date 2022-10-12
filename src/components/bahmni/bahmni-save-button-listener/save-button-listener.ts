import {bahmniSaveButtonResponseTime} from '../../../utils/constants'
import {saveConsultationNotes} from '../../consultation-pad-contents/consultation-pad-contents.resources'

let consultationNotes = ''

export const setConsultationNotes = value => {
  consultationNotes = value
}

let saveButton = null
let isHashChangeEventAdded = false

const onBahmniSaveButtonClick = (
  patientDetails,
  closeConsultationPad,
  setSavedNotes,
) => {
  closeConsultationPad()
  setTimeout(() => {
    saveConsultationNotes(consultationNotes, patientDetails)
    setSavedNotes(consultationNotes)
  }, bahmniSaveButtonResponseTime)
}

const addBahmniSaveButtonListener = (
  patientDetails,
  closeConsultationPad,
  setSavedNotes,
) => {
  const bahmniSaveButton = document
    .getElementsByClassName('confirm save-consultation')
    .item(0)

  if (bahmniSaveButton !== null) {
    if (saveButton === null) {
      saveButton = bahmniSaveButton
      saveButton.addEventListener('click', () =>
        onBahmniSaveButtonClick(
          patientDetails,
          closeConsultationPad,
          setSavedNotes,
        ),
      )
    }
  } else {
    saveButton = null
  }
}

export const addSaveButtonListener = (
  patientDetails,
  closeConsultationPad,
  setSavedNotes,
) => {
  if (isHashChangeEventAdded === false) {
    addBahmniSaveButtonListener(
      patientDetails,
      closeConsultationPad,
      setSavedNotes,
    )
    window.addEventListener('hashchange', () => {
      addBahmniSaveButtonListener(
        patientDetails,
        closeConsultationPad,
        setSavedNotes,
      )
    })
    isHashChangeEventAdded = true
  }
}
