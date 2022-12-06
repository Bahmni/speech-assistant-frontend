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
import {
  consultationEncounterTypeUrl,
  consultationNotesConceptUrl,
  encounterUrl,
  saveNotesUrl,
  unknownEncounterRoleUrl,
} from '../../utils/constants'
import {ConsultationPadContents} from './consultation-pad-contents'
import {mockConsultationEncounterTypeResponse} from '../../__mocks__/encounterTypeResponse.mock'
import {mockConsultationEncounterRoleResopnse} from '../../__mocks__/encounterRoleResponse.mock'
import {updateObsResponse} from '../../__mocks__/updateObsResponse.mock'
import {mockEncounterResponseWithActiveEncounter} from '../../__mocks__/encounterResponseWithActiveEncounter.mock'
import {mockEncounterResponseWithInActiveEncounter} from '../../__mocks__/encounterResponseWithInActiveEnconter.mock'
import {mockEncounterResponseWithOutObsInActiveEncounter} from '../../__mocks__/encounterResponseWithOutObsInActiveEncounter.mock'
import {mockEncounterResponseWithTwoActiveEncounetrsOfDiffProviders} from '../../__mocks__/encounterResponseWithTwoActiveEncounetrsOfDiffProviders.mock'

jest.mock('../../utils/socket-connection/socket-connection')

describe('Consultation Pad Contents', () => {
  afterEach(() => jest.clearAllMocks())
  const handleClose = jest.fn()
  const setConsultationText = jest.fn()

  it('should show the textbox, start mic and save button when consultation pad contents component is rendered', () => {
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
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={''}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
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
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={''}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
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
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={''}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
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
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={''}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
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
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={'Consultation'}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
        />
        , ,
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
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={'Consultation'}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
        />
        , ,
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
      providerUuid: '',
    }

    const value = {
      patientDetails: mockPatientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={'consultationText'}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
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

  it('should save consultation notes and create new obs on click of save button when active consultation encounter is present and consultation obs is not present with the current provider', async () => {
    global.fetch = jest.fn().mockImplementation()

    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockEncounterResponseWithOutObsInActiveEncounter,
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

    const patientDetails: PatientDetails = {
      isActiveVisit: true,
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
    }

    const value = {
      patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    const consultationText = 'Consultation Notes'

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={consultationText}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={jest.fn()}
          setOnSaveFailure={jest.fn()}
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
    const mockEncounterTypeUrl = mockFetch.mock.calls[0][0]
    const conceptUrl = mockFetch.mock.calls[2][0]
    const obsUrl = mockFetch.mock.calls[3][0]
    const obsJsonBody = JSON.parse(mockFetch.mock.calls[3][1].body)
    expect(fetch).toBeCalledTimes(4)

    expect(mockEncounterTypeUrl).toBe(consultationEncounterTypeUrl)
    expect(conceptUrl).toBe(consultationNotesConceptUrl)
    expect(obsUrl).toBe(saveNotesUrl)
    expect(obsJsonBody.value).toBe('Consultation Notes')
  })

  it('should save consultation notes and update the obs on click of save button when active consultation encounter and consultation obs is already present with the current provider', async () => {
    global.fetch = jest.fn().mockImplementation()

    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockEncounterResponseWithActiveEncounter,
        ok: true,
      })
      .mockResolvedValue({
        json: () => updateObsResponse,
        ok: true,
      })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
    }

    const consultationText = 'Consultation Notes'

    const value = {
      patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: 'cbde1954-59fb-424f-a6dc-ad9db366523f',
    }

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={consultationText}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={jest.fn()}
          setOnSaveFailure={jest.fn()}
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

    const updateObsUrl = mockFetch.mock.calls[2][0]
    const obsJsonBody = JSON.parse(mockFetch.mock.calls[2][1].body)

    expect(fetch).toBeCalledTimes(3)

    expect(updateObsUrl).toBe(
      '/openmrs/ws/rest/v1/obs/052aa982-35f1-466c-9c0e-1957ff3c9d32',
    )
    expect(obsJsonBody.value).toBe('Consultation Notes')
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
    setConsultationText.mockImplementation(value => (consultationText = value))

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
    }

    const value = {
      patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={consultationText}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={''}
          setOnSaveFailure={''}
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

  it('should create encounter with observation on click of save button when consultation encounter is not present with the current provider', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockEncounterResponseWithInActiveEncounter,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterRoleResopnse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConceptResponse,
        ok: true,
      })
      .mockResolvedValue({
        json: () => ({}),
        ok: true,
      })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
    }

    const value = {
      patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={'Consultation Notes'}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={jest.fn()}
          setOnSaveFailure={jest.fn()}
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

    expect(fetch).toBeCalledTimes(6)

    const mockInitialEncounterTypeUrl = mockFetch.mock.calls[0][0]
    const mockEncounterTypeUrl = mockFetch.mock.calls[2][0]
    const mockEncounterRoleurl = mockFetch.mock.calls[3][0]
    const mockConceptUrl = mockFetch.mock.calls[4][0]
    const mockEncounterUrl = mockFetch.mock.calls[5][0]
    const mockEncounterRequestBody = JSON.parse(mockFetch.mock.calls[5][1].body)
    expect(mockInitialEncounterTypeUrl).toBe(consultationEncounterTypeUrl)
    expect(mockEncounterTypeUrl).toBe(consultationEncounterTypeUrl)
    expect(mockEncounterRoleurl).toBe(unknownEncounterRoleUrl)
    expect(mockConceptUrl).toBe(consultationNotesConceptUrl)
    expect(mockEncounterUrl).toBe(encounterUrl)
    expect(mockEncounterRequestBody.obs[0].value).toBe('Consultation Notes')
  })

  it('should create encounter with observation when clicked on save button and no active consultation encounter is present with the current provider', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockEncounterResponseWithInActiveEncounter,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterRoleResopnse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConceptResponse,
        ok: true,
      })
      .mockResolvedValue({
        json: () => ({}),
        ok: true,
      })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'c1c26908-3f10-11e4-adec-0800271c1b75',
    }

    const value = {
      patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
          consultationText={'Consultation Notes'}
          setConsultationText={setConsultationText}
          setOnSaveSuccess={jest.fn()}
          setOnSaveFailure={jest.fn()}
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
    expect(fetch).toBeCalledTimes(6)

    const mockEncounterTypeUrl = mockFetch.mock.calls[2][0]
    const mockEncounterRoleurl = mockFetch.mock.calls[3][0]
    const mockConceptUrl = mockFetch.mock.calls[4][0]
    const mockEncounterUrl = mockFetch.mock.calls[5][0]
    const mockEncounterRequestBody = JSON.parse(mockFetch.mock.calls[5][1].body)

    expect(mockEncounterTypeUrl).toBe(consultationEncounterTypeUrl)
    expect(mockEncounterRoleurl).toBe(unknownEncounterRoleUrl)
    expect(mockConceptUrl).toBe(consultationNotesConceptUrl)
    expect(mockEncounterUrl).toBe(encounterUrl)
    expect(mockEncounterRequestBody.obs[0].value).toBe('Consultation Notes')
  })

  it('should create encounter with observation on click of save button when active consultation encounter is not of current provider', async () => {
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    global.fetch = jest.fn().mockImplementation()
    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockEncounterResponseWithActiveEncounter,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterRoleResopnse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockConceptResponse,
        ok: true,
      })
      .mockResolvedValue({
        json: () => ({}),
        ok: true,
      })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'b7a915a4-b142-41ab-ae13-a060003885a1',
    }

    const value = {
      patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
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
    expect(fetch).toBeCalledTimes(6)

    const mockEncounterTypeUrl = mockFetch.mock.calls[2][0]
    const mockEncounterRoleurl = mockFetch.mock.calls[3][0]
    const mockConceptUrl = mockFetch.mock.calls[4][0]
    const mockEncounterUrl = mockFetch.mock.calls[5][0]
    const mockEncounterRequestBody = JSON.parse(mockFetch.mock.calls[5][1].body)

    expect(mockEncounterTypeUrl).toBe(consultationEncounterTypeUrl)
    expect(mockEncounterRoleurl).toBe(unknownEncounterRoleUrl)
    expect(mockConceptUrl).toBe(consultationNotesConceptUrl)
    expect(mockEncounterUrl).toBe(encounterUrl)
    expect(mockEncounterRequestBody.obs[0].value).toBe('Consultation Notes')
  })

  it('should save consultation notes and update the obs on click of save button with current provider when active consultation encounter and consultation obs are present for two diffrent providers', async () => {
    global.fetch = jest.fn().mockImplementation()

    const mockFetch = global.fetch as jest.Mock
    mockFetch
      .mockResolvedValueOnce({
        json: () => mockConsultationEncounterTypeResponse,
        ok: true,
      })
      .mockResolvedValueOnce({
        json: () => mockEncounterResponseWithTwoActiveEncounetrsOfDiffProviders,
        ok: true,
      })
      .mockResolvedValue({
        json: () => updateObsResponse,
        ok: true,
      })

    const patientDetails: PatientDetails = {
      patientUuid: 'dc9444c6-ad55-4200-b6e9-407e025eb948',
      locationUuid: 'baf7bd38-d225-11e4-9c67-080027b662ec',
      isActiveVisit: true,
      providerUuid: 'b7a915a4-b142-41ab-ae13-a060003885a1',
    }

    const value = {
      patientDetails,
      savedConsultationNotes: '',
      setSavedConsultationNotes: jest.fn(),
      visitUuid: '8281dd37-45c0-4a45-a939-ecb95fdb6ed7',
    }
    const consultationText = 'Consultation Notes'

    render(
      <ConsultationContext.Provider value={value}>
        <ConsultationPadContents
          closeConsultationPad={handleClose}
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

    const updateObsUrl = mockFetch.mock.calls[2][0]
    const obsJsonBody = JSON.parse(mockFetch.mock.calls[2][1].body)

    expect(fetch).toBeCalledTimes(3)

    expect(updateObsUrl).toBe(
      '/openmrs/ws/rest/v1/obs/722a4f33-5f18-43e3-9a53-15e756e2fa9d',
    )
    expect(obsJsonBody.value).toBe('Consultation Notes')
    expect(value.setSavedConsultationNotes).toHaveBeenCalledWith(
      consultationText,
    )
  })
})
