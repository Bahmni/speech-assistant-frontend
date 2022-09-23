import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import {mockVisitResponse} from '../../__mocks__/visitResponse.mock'
import ConsultationNotes from './consultation-notes'

describe('Floating Button and Consultation Pad', () => {
  it('should not show consultation pad button when patient has no active visit', () => {
    const mockPatientDetails: PatientDetails = null

    render(
      <ConsultationContext.Provider value={mockPatientDetails}>
        <ConsultationNotes />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.queryByRole('button', {
        name: /Consultation Pad/i,
      }),
    ).not.toBeInTheDocument()
  })
  it('should show consultation pad button when consultation notes component is rendered and patient has active visit', () => {
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      activeVisit: mockVisitResponse,
    }

    render(
      <ConsultationContext.Provider value={mockPatientDetails}>
        <ConsultationNotes />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /Consultation Pad/i,
      }),
    ).toBeInTheDocument()
  })

  it('should show consultation notes component when consultation pad button is clicked', async () => {
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      activeVisit: mockVisitResponse,
    }
    render(
      <ConsultationContext.Provider value={mockPatientDetails}>
        <ConsultationNotes />
      </ConsultationContext.Provider>,
    )

    const consultationPadButtonName = {
      name: /Consultation Pad/i,
    }

    await userEvent.click(screen.getByRole('button', consultationPadButtonName))

    await waitFor(() => {
      expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
    })
    expect(
      screen.queryByRole('button', consultationPadButtonName),
    ).not.toBeInTheDocument()
  })

  it('should show consultation pad button when consultation pad is closed', async () => {
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      activeVisit: mockVisitResponse,
    }
    render(
      <ConsultationContext.Provider value={mockPatientDetails}>
        <ConsultationNotes />
      </ConsultationContext.Provider>,
    )

    const consultationPadButtonName = {
      name: /Consultation Pad/i,
    }
    await userEvent.click(screen.getByRole('button', consultationPadButtonName))
    await userEvent.click(screen.getByLabelText('close'))

    await waitFor(() => {
      expect(
        screen.getByRole('button', consultationPadButtonName),
      ).toBeInTheDocument()
    })
  })
})
