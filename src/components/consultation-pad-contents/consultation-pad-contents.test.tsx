import {fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {
  ConsultationContext,
  PatientDetails,
} from '../../context/consultation-context'
import SocketConnection from '../../utils/socket-connection/socket-connection'
import {mockConceptResponse} from '../../__mocks__/conceptResponse.mock'
import {mockObsResponse} from '../../__mocks__/obsResponse.mock'
import {customVisitUrl} from '../../utils/constants'

import {mockVisitResponseWithInactiveEncounter} from '../../__mocks__/activeVisitWithInactiveEncounters.mock'
import {ConsultationPadContents} from './consultation-pad-contents'
import {mockVisitResponseWithNoEncounter} from '../../__mocks__/activeVisitWithNoEncounter.mock'
import {mockVisitResponseWithActiveEncounterWithoutConsultationObs} from '../../__mocks__/activeVisitWithActiveEncountersAndWithoutConsultationObs.mock'
import {mockVisitResponseWithActiveEncounter} from '../../__mocks__/activeVisitWithActiveEncounters.mock'
import {updateObsResponse} from '../../__mocks__/updateObsResponse.mock'

jest.mock('../../utils/socket-connection/socket-connection')

describe('Consultation Pad Contents', () => {
  afterEach(() => jest.clearAllMocks())
  const setConsultationText = jest.fn()

  it('should show the textbox, start mic and save button when consultation pad contents component is rendered', () => {
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={''}
          setConsultationText={setConsultationText}
        />
        ,
      </ConsultationContext.Provider>,
    )

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

    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={''}
          setConsultationText={setConsultationText}
        />
        ,
      </ConsultationContext.Provider>,
    )

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
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={''}
          setConsultationText={setConsultationText}
        />
        ,
      </ConsultationContext.Provider>,
    )

    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    await userEvent.click(screen.getByLabelText('Start Mic'))
    expect(mockSocketConnection.handleStart).toHaveBeenCalled()

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

  it('should update the consultation notes with the recorded text when consultation notes is empty', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={''}
          setConsultationText={setConsultationText}
        />
        ,
      </ConsultationContext.Provider>,
    )

    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]
    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    mockSocketConnection.handleStart.mockImplementation(() =>
      mockOnRecording(true),
    )
    mockSocketConnection.handleStop.mockImplementation(() =>
      mockOnRecording(false),
    )

    await userEvent.click(screen.getByLabelText('Start Mic'))
    waitFor(() => {
      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })

    mockOnIncomingMessage('Notes')

    await userEvent.click(screen.getByLabelText('Stop Mic'))
    waitFor(() => {
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(setConsultationText).toHaveBeenCalledWith('Notes')
    })
  })

  it('should append the consultation notes with the recorded text when consultation notes is available', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={'Consultation'}
          setConsultationText={setConsultationText}
        />
      </ConsultationContext.Provider>,
    )

    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]
    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    mockSocketConnection.handleStart.mockImplementation(() =>
      mockOnRecording(true),
    )
    mockSocketConnection.handleStop.mockImplementation(() =>
      mockOnRecording(false),
    )

    await userEvent.click(screen.getByLabelText('Start Mic'))
    waitFor(() => {
      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })

    mockOnIncomingMessage('Notes')

    await userEvent.click(screen.getByLabelText('Stop Mic'))
    waitFor(() => {
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    })

    await waitFor(() => {
      expect(setConsultationText).toHaveBeenCalledWith('Consultation Notes')
    })
  })

  it('should enable save button when text is present in text area', () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={'Consultation'}
          setConsultationText={setConsultationText}
        />
      </ConsultationContext.Provider>,
    )
    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeEnabled()
  })

  it('should disable save button when recording is active ', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    const mockPatientDetails: PatientDetails = {
      patientUuid: 'abc',
      locationUuid: 'def',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={'consultationText'}
          setConsultationText={setConsultationText}
        />
        ,
      </ConsultationContext.Provider>,
    )

    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    expect(SocketConnection).toHaveBeenCalled()

    expect(
      screen.getByRole('button', {
        name: /Save Notes/i,
      }),
    ).toBeEnabled()

    await userEvent.click(screen.getByLabelText('Start Mic'))

    expect(mockSocketConnection.handleStart).toHaveBeenCalled()
    await waitFor(() => {
      mockOnRecording(true)
      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })
    expect(
      screen.getByRole('button', {
        name: /Save Notes/i,
      }),
    ).toBeDisabled()

    await userEvent.click(screen.getByLabelText('Stop Mic'))

    expect(mockSocketConnection.handleStop).toHaveBeenCalled()

    await waitFor(() => {
      mockOnRecording(false)
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    })

    expect(
      screen.getByRole('button', {
        name: /Save Notes/i,
      }),
    ).toBeEnabled()
  })

  it('should not save consultation notes when clicked on save button and active consultation encounter is not present', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch.mockResolvedValue({
      json: () => mockVisitResponseWithInactiveEncounter,
      ok: true,
    })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
    }
    const value = {
      patientDetails: patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={'Consultation Notes'}
          setConsultationText={setConsultationText}
        />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeEnabled()

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )
    expect(fetch).toBeCalledTimes(1)
    expect(mockFetch.mock.calls[0][0]).toBe(
      customVisitUrl(patientDetails.patientUuid, patientDetails.locationUuid),
    )
  })

  it('should not save consultation notes when clicked on save button and consultation encounter is not present', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch.mockResolvedValue({
      json: () => mockVisitResponseWithNoEncounter,
      ok: true,
    })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={'Consultation Notes'}
          setConsultationText={setConsultationText}
        />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeEnabled()

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )
    expect(fetch).toBeCalledTimes(1)
    expect(mockFetch.mock.calls[0][0]).toBe(
      customVisitUrl(patientDetails.patientUuid, patientDetails.locationUuid),
    )
  })

  it('should save consultation notes and create new obs on click of save button when active consultation encounter is present and consultation obs is not present', async () => {
    global.fetch = jest.fn().mockImplementation()

    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockVisitResponseWithActiveEncounterWithoutConsultationObs,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConceptResponse,
        ok: true,
      })
      .mockResolvedValue({
        json: () => mockObsResponse,
        ok: true,
      })

    const setSavedConsultationNotes = jest.fn()
    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: setSavedConsultationNotes,
    }
    const consultationText = 'Consultation Notes'

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={consultationText}
          setConsultationText={setConsultationText}
        />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeEnabled()

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )
    const visiturl = mockFetch.mock.calls[0][0]
    const conceptUrl = mockFetch.mock.calls[1][0]
    const obsUrl = mockFetch.mock.calls[2][0]
    const obsJsonBody = JSON.parse(mockFetch.mock.calls[2][1].body)

    expect(fetch).toBeCalledTimes(3)
    expect(visiturl).toBe(
      customVisitUrl(patientDetails.patientUuid, patientDetails.locationUuid),
    )
    expect(conceptUrl).toBe('/openmrs/ws/rest/v1/concept?q="Consultation Note')
    expect(obsUrl).toBe('/openmrs/ws/rest/v1/obs')
    expect(obsJsonBody.value).toBe('Consultation Notes')
    expect(setSavedConsultationNotes).toHaveBeenCalledWith(consultationText)
  })

  it('should save consultation notes and update the obs on click of save button when active consultation encounter and consultation obs is already present', async () => {
    global.fetch = jest.fn().mockImplementation()

    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockVisitResponseWithActiveEncounter,
        ok: true,
      })
      .mockResolvedValue({
        json: () => updateObsResponse,
        ok: true,
      })

    const setSavedConsultationNotes = jest.fn()
    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: setSavedConsultationNotes,
    }
    const consultationText = 'Consultation Notes'

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={consultationText}
          setConsultationText={setConsultationText}
        />
      </ConsultationContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeEnabled()

    await userEvent.click(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    )

    const visiturl = mockFetch.mock.calls[0][0]
    const updateObsUrl = mockFetch.mock.calls[1][0]
    const obsJsonBody = JSON.parse(mockFetch.mock.calls[1][1].body)

    expect(fetch).toBeCalledTimes(2)
    expect(visiturl).toBe(
      customVisitUrl(patientDetails.patientUuid, patientDetails.locationUuid),
    )
    expect(updateObsUrl).toBe(
      '/openmrs/ws/rest/v1/obs/8dd4d632-ec99-4056-b6dc-d489f1dc5f30',
    )
    expect(obsJsonBody.value).toBe('Consultation Notes')
    expect(setSavedConsultationNotes).toHaveBeenCalledWith(consultationText)
  })

  it('should update the consultation notes when user is typing manually on consultation pad', () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    let consultationText = ''
    const setConsultationText = jest.fn()
    setConsultationText.mockImplementation(value => (consultationText = value))

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
    }

    const value = {
      patientDetails: patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          consultationText={consultationText}
          setConsultationText={setConsultationText}
        />
        ,
      </ConsultationContext.Provider>,
    )

    expect(
      screen.getByRole('button', {
        name: /Save Notes/i,
      }),
    ).toBeDisabled()
    fireEvent.change(screen.getByRole('textbox'), {
      target: {value: 'Consultation'},
    })

    expect(consultationText).toBe('Consultation')
  })
})
