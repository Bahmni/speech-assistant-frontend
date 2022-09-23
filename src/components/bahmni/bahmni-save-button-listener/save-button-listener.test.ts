import {PatientDetails} from '../../../context/consultation-context'
import {
  addSaveButtonListener,
  setConsultationNotes,
} from './save-button-listener'
import {saveConsultationNotes} from '../../consultation-pad-contents/consultation-pad-contents.resources'
import {bahmniSaveButtonResponseTime} from '../../../utils/constants'

jest.mock('../../consultation-pad-contents/consultation-pad-contents.resources')
jest.useFakeTimers()

describe('Bahmni save button listener', () => {
  it('should trigger event listener on click of bahmni save button', async () => {
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
    save.click()

    expect(setTimeout).toHaveBeenCalledTimes(1)
    expect(setTimeout).toHaveBeenLastCalledWith(
      expect.any(Function),
      bahmniSaveButtonResponseTime,
    )

    jest.runAllTimers()

    expect(mockedSaveConsultationNotes).toBeCalledTimes(1)
    expect(handleClose).toBeCalledTimes(1)
  })
})
