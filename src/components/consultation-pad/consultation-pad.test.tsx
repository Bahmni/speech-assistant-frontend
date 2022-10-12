import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SocketConnection from '../../utils/socket-connection/socket-connection'
import {ConsultationPad} from './consultation-pad'

jest.mock('../../utils/socket-connection/socket-connection')

describe('Consultation Pad', () => {
  afterEach(() => jest.clearAllMocks())
  it('should show consultation notes heading, minimize icon, start mic and save button when consultation pad component is rendered', () => {
    render(
      <ConsultationPad
        setShowConsultationPad={jest.fn()}
        consultationText={''}
        setConsultationText={jest.fn()}
        setSavedNotes={jest.fn()}
      />,
    )

    expect(screen.getByRole('heading', {name: /Consultation Notes/i}))
    expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
    expect(screen.getByLabelText('minimizeIcon')).toBeInTheDocument()
    expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
  })
  it('should update consultation notes with recorded text when clicked on minimize icon without stopping the recording', async () => {
    let consultationText = ''
    const setConsultationText = jest.fn()
    setConsultationText.mockImplementation(value => (consultationText = value))

    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )

    const {unmount} = render(
      <ConsultationPad
        setShowConsultationPad={jest.fn()}
        consultationText={consultationText}
        setConsultationText={setConsultationText}
        setSavedNotes={jest.fn()}
      />,
    )

    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]
    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    expect(SocketConnection).toHaveBeenCalled()

    const start = screen.getByLabelText('Start Mic')
    expect(start).toBeInTheDocument()
    userEvent.click(start)

    await waitFor(() => {
      mockOnRecording(true)

      mockOnIncomingMessage('Notes')

      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })

    await userEvent.click(screen.getByLabelText('minimizeIcon'))
    unmount()
    await waitFor(() => {
      expect(consultationText).toBe('Notes')
    })
  })

  it('should append recorded text with consultation notes when clicked on minimize icon without stopping the recording', async () => {
    let consultationText = 'Consultation'
    const setConsultationText = jest.fn()
    setConsultationText.mockImplementation(value => (consultationText = value))

    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    const {unmount} = render(
      <ConsultationPad
        setShowConsultationPad={jest.fn()}
        consultationText={consultationText}
        setConsultationText={setConsultationText}
        setSavedNotes={jest.fn()}
      />,
    )

    const mockOnIncomingMessage = (SocketConnection as jest.Mock).mock
      .calls[0][1]
    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]
    expect(SocketConnection).toHaveBeenCalled()

    const start = screen.getByLabelText('Start Mic')
    expect(start).toBeInTheDocument()
    userEvent.click(start)

    await waitFor(() => {
      mockOnRecording(true)

      mockOnIncomingMessage('Notes')

      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })

    await userEvent.click(screen.getByLabelText('minimizeIcon'))
    unmount()
    await waitFor(() => {
      expect(consultationText).toBe('Consultation Notes')
    })
  })
})
