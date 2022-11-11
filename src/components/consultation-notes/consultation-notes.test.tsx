import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import ConsultationNotes from './consultation-notes'

describe('Floating Button and Consultation Pad', () => {
  it('should show consultation pad when consultation pad button is clicked', async () => {
    const mockPatientDetails: PatientDetails = null

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '',
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
      visitUuid: '',
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
