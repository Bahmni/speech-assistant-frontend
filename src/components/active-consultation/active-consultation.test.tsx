import {render, screen} from '@testing-library/react'
import React from 'react'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import ActiveConsultation from './active-consultation'

describe('Active Consultation', () => {
  it('should not show consultation pad button when patient has no active visit', () => {
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: false,
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '',
    }

    render(
      <ConsultationContext.Provider value={value}>
        <ActiveConsultation />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.queryByRole('button', {
        name: /Notes/i,
      }),
    ).not.toBeInTheDocument()
  })

  it('should show consultation pad button when consultation notes component is rendered and patient has active visit', () => {
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ActiveConsultation />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /Notes/i,
      }),
    ).toBeInTheDocument()
  })
})
