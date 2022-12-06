import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import {mockVisitResponseWithActiveEncounter} from '../../__mocks__/activeVisitWithActiveEncounters.mock'
import {mockObsResponse} from '../../__mocks__/obsResponse.mock'
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

  it('should show a toast notification with title "Saved notes successfully" on click of save button when notes are saved successfully', async () => {
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockVisitResponseWithActiveEncounter,
        ok: true,
      })
      .mockResolvedValue({
        json: () => mockObsResponse,
        ok: true,
      })
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: 'data',
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

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )

    await waitFor(() =>
      expect(screen.getByText('Saved notes successfully')).toBeInTheDocument(),
    )

    setTimeout(() => {
      const messageSpan = screen.getByText('Saved notes successfully')
      expect(messageSpan).not.toBeInTheDocument()
    }, 5000)
  })

  it('should show a toast notification with title "Notes could not be saved" on click of save button when notes are not saved successfully', async () => {
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockVisitResponseWithActiveEncounter,
        ok: true,
      })
      .mockResolvedValue({
        json: () => mockObsResponse,
        ok: true,
      })
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: ' ',
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

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )

    await waitFor(() =>
      expect(screen.getByText('Notes could not be saved')).toBeInTheDocument(),
    )
    screen.debug()
    expect(screen.getByTitle('close notification')).toBeInTheDocument()

    await userEvent.click(screen.getByTitle('close notification'))
  })
})
