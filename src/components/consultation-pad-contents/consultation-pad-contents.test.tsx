import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import SocketConnection from '../../utils/socket-connection/socket-connection'
import {
  mockObsResponse,
  mockConceptResponse,
  mockVisitResponse,
  mockNoConsultationEncounerVisitResponse,
  mockExpiredConsultationEncounterVisitResponse,
} from '../../__mocks__/saveConsultationNotes.mock'
import {ConsultationPadContents} from './consultation-pad-contents'

jest.mock('../../utils/socket-connection/socket-connection')

describe('Consultation Pad Contents', () => {
  afterEach(() => jest.clearAllMocks())

  it('should show the textbox, start mic and save button when consultation pad contents component is rendered', async () => {
    render(<ConsultationPadContents />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeDisabled()
  })

  it('should show the stop mic and focus on text area when start mic is clicked', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    render(<ConsultationPadContents />)

    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    expect(SocketConnection).toHaveBeenCalled()
    await userEvent.click(screen.getByLabelText('Start Mic'))

    expect(mockSocketConnection.handleStart).toHaveBeenCalled()
    await waitFor(() => {
      mockOnRecording(true)
      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
      expect(screen.getByRole('textbox')).toHaveFocus()
    })
  })

  it('should show the start mic and focus on text area when stop mic is clicked', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    render(<ConsultationPadContents />)

    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    await userEvent.click(screen.getByLabelText('Start Mic'))
    await waitFor(() => {
      mockOnRecording(true)
      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })
    await userEvent.click(screen.getByLabelText('Stop Mic'))

    expect(mockSocketConnection.handleStop).toHaveBeenCalled()
    waitFor(() => {
      mockOnRecording(false)
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
      expect(screen.getByRole('textbox')).toHaveFocus()
    })
  })

  it('should enable save button when text is present in text area', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    render(<ConsultationPadContents />)
    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]

    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeDisabled()

    waitFor(() => {
      mockOnIncomingMessage('hello')
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeEnabled()
    })
  })

  it('should not save consultation notes when clicked on save button and active visits are not present', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    global.fetch = jest.fn().mockImplementation(() => Promise<JSON>)

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: '',
      visitResponse: {
        results: [],
      },
    }

    render(
      <ConsultationContext.Provider value={patientDetails}>
        <ConsultationPadContents />
      </ConsultationContext.Provider>,
    )
    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]

    await waitFor(() => {
      mockOnIncomingMessage('Consultation Notes')
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeEnabled()
    })

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )
    expect(fetch).not.toBeCalled()
  })

  it('should not save consultation notes when clicked on save button and consultation encounter is not present', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    global.fetch = jest.fn().mockImplementation(() => Promise<JSON>)

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: '',
      visitResponse: mockNoConsultationEncounerVisitResponse,
    }

    render(
      <ConsultationContext.Provider value={patientDetails}>
        <ConsultationPadContents />
      </ConsultationContext.Provider>,
    )
    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]

    await waitFor(() => {
      mockOnIncomingMessage('Consultation Notes')
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeEnabled()
    })

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )
    expect(fetch).not.toBeCalled()
  })

  it('should save consultation notes when clicked on save button and active consultation encounter is present', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )

    global.fetch = jest.fn().mockImplementation(() => Promise<JSON>)
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => {
          return mockConceptResponse
        },
      })
      .mockResolvedValue({
        json: () => {
          return mockObsResponse
        },
      })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: '',
      visitResponse: mockVisitResponse,
    }

    render(
      <ConsultationContext.Provider value={patientDetails}>
        <ConsultationPadContents />
      </ConsultationContext.Provider>,
    )
    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]

    // ;(
    await waitFor(() => {
      mockOnIncomingMessage('Consultation Notes')
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeEnabled()
    })

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )

    const conceptUrl = mockFetch.mock.calls[0][0]
    const obsUrl = mockFetch.mock.calls[1][0]
    const obsJsonBody = JSON.parse(mockFetch.mock.calls[1][1].body)

    expect(fetch).toBeCalled()
    // expect(visitUrl).toBe('')
    expect(conceptUrl).toBe('/openmrs/ws/rest/v1/concept?q="Consultation Note')
    expect(obsUrl).toBe('/openmrs/ws/rest/v1/obs')
    expect(obsJsonBody.value).toBe('Consultation Notes')
  })

  it('should not save consultation notes when clicked on save button and active consultation encounter is not present', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: '',
      visitResponse: mockExpiredConsultationEncounterVisitResponse,
    }

    render(
      <ConsultationContext.Provider value={patientDetails}>
        <ConsultationPadContents />
      </ConsultationContext.Provider>,
    )
    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]

    await waitFor(() => {
      mockOnIncomingMessage('Consultation Notes')
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeEnabled()
    })

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )
    expect(fetch).not.toBeCalled()
  })
})
