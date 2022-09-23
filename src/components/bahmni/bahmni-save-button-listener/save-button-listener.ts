import {bahmniSaveButtonResponseTime} from '../../../utils/constants'
import {saveConsultationNotes} from '../../consultation-pad-contents/consultation-pad-contents.resources'

let consultationNotes = ''

export const setConsultationNotes = value => {
  consultationNotes = value
}

export const addSaveButtonListener = (patientDetails, handleClose) => {
  const save = document
    .getElementsByClassName('confirm save-consultation')
    .item(0)
  save?.addEventListener('click', () => onClick(patientDetails, handleClose))
}

const onClick = (patientDetails, handleClose) => {
  setTimeout(async () => {
    saveConsultationNotes(consultationNotes, patientDetails)
    handleClose()
  }, bahmniSaveButtonResponseTime)
}
