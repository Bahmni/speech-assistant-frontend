import {PatientDetails} from '../../../context/consultation-context'
import {
  addSaveButtonListener,
  setConsultationNotes,
} from './save-button-listener'
import {saveConsultationNotes} from '../../consultation-pad-contents/consultation-pad-contents.resources'

jest.mock('../../consultation-pad-contents/consultation-pad-contents.resources')
jest.useFakeTimers()

describe('Bahmni save button listener', () => {
  it('should trigger event listener only once irrespective of multiple url changes when bahmni save button is clicked', () => {
    const mockedSaveConsultationNotes = jest.mocked(saveConsultationNotes)
    const handleClose = jest.fn()

    jest.spyOn(global, 'setTimeout')

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
    }

    setConsultationNotes('testing')

    const save = document.createElement('button')
    save.className = 'confirm save-consultation'
    save.innerHTML = 'Save'

    document.body.appendChild(save)

    addSaveButtonListener(patientDetails, handleClose)
    window.dispatchEvent(new HashChangeEvent('hashchange'))
    window.dispatchEvent(new HashChangeEvent('hashchange'))
    window.dispatchEvent(new HashChangeEvent('hashchange'))

    save.click()

    jest.runAllTimers()

    expect(mockedSaveConsultationNotes).toBeCalledTimes(1)
    expect(handleClose).toBeCalledTimes(1)
  })
})
