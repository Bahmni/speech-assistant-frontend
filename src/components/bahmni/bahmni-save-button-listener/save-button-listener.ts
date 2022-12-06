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
  visitUuid,
) => {
  closeConsultationPad()
  setTimeout(() => {
    saveConsultationNotes(consultationNotes, patientDetails, visitUuid)
    setSavedNotes(consultationNotes)
  }, bahmniSaveButtonResponseTime)
}

const addBahmniSaveButtonListener = (
  patientDetails,
  closeConsultationPad,
  setSavedNotes,
  visitUuid,
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
          visitUuid,
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
  visitUuid,
) => {
  if (isHashChangeEventAdded === false) {
    addBahmniSaveButtonListener(
      patientDetails,
      closeConsultationPad,
      setSavedNotes,
      visitUuid,
    )
    window.addEventListener('hashchange', () => {
      addBahmniSaveButtonListener(
        patientDetails,
        closeConsultationPad,
        setSavedNotes,
        visitUuid,
      )
    })
    isHashChangeEventAdded = true
  }
}
