import {act, fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import ConsultationNotes from './consultation-notes'
import {saveConsultationNotes} from '../consultation-pad-contents/consultation-pad-contents.resources'

jest.mock('../consultation-pad-contents/consultation-pad-contents.resources')

describe('Floating Button and Consultation Pad', () => {
  it('should show consultation pad when consultation pad button is clicked', async () => {
    const mockPatientDetails: PatientDetails = null

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationNotes />
      </ConsultationContext.Provider>,
    )
    const consultationPadButtonName = {
      name: 'Notes',
    }

    await userEvent.click(screen.getByRole('button', consultationPadButtonName))

    await waitFor(() => {
      expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
    })
    expect(
      screen.queryByRole('button', consultationPadButtonName),
    ).not.toBeInTheDocument()
  })

  it('should show consultation pad button when minimize icon is clicked', async () => {
    const mockPatientDetails: PatientDetails = null

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationNotes />
      </ConsultationContext.Provider>,
    )

    const consultationPadButtonName = {
      name: /Notes/i,
    }
    await userEvent.click(screen.getByRole('button', consultationPadButtonName))
    await userEvent.click(screen.getByLabelText('minimizeIcon'))

    await waitFor(() => {
      expect(
        screen.getByRole('button', consultationPadButtonName),
      ).toBeInTheDocument()
    })
  })
})

describe('Save Consultation Notes Event', () => {
  it('should save consultation notes and minimize the box when saveConsultationNotes event is dispatched', async () => {
    const mockSaveConsultationNotes = jest.mocked(saveConsultationNotes)
    render(<ConsultationNotes />)
    const consultationPadButtonName = {
      name: /Notes/i,
    }
    await userEvent.click(screen.getByRole('button', consultationPadButtonName))
    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: 'New Consultation'},
    })
    act(() => {
      document.dispatchEvent(new Event('click:saveConsultationNotes'))
    })
    expect(mockSaveConsultationNotes).toHaveBeenCalledWith(
      'New Consultation',
      {},
    )
    expect(
      screen.getByRole('button', consultationPadButtonName),
    ).toBeInTheDocument()
    expect(screen.queryByText('Consultation Notes')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('warningFilled')).not.toBeInTheDocument()
  })
})
