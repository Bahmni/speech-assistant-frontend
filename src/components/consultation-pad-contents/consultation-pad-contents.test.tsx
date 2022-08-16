import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SocketConnection from '../../utils/socket-connection/socket-connection'
import {ConsultationPadContents} from './consultation-pad-contents'
jest.mock('../../utils/socket-connection/socket-connection')

describe('Consultation Pad Contents', () => {
  afterEach(() => jest.clearAllMocks())

  it('should show the contents inside the consultation pad', async () => {
    render(<ConsultationPadContents />)

    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    expect(
      screen.getByRole('button', {
        name: /Save/i,
      }),
    ).toBeDisabled()
  })

  it('should toggle between start mic and stop mic when clicked', async () => {
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
    })

    await userEvent.click(screen.getByLabelText('Stop Mic'))

    expect(mockSocketConnection.handleStop).toHaveBeenCalled()
    waitFor(() => {
      mockOnRecording(false)
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    })
  })

  it('should focus on the textarea when start mic and stop mic are clicked', async () => {
    const user = userEvent.setup()
    const mockSocketConnection = {
      handleStart: jest.fn(),
      handleStop: jest.fn(),
    }
    ;(SocketConnection as jest.Mock).mockImplementation(
      () => mockSocketConnection,
    )
    render(<ConsultationPadContents />)
    const mockOnRecording = (SocketConnection as jest.Mock).mock.calls[0][2]

    await user.click(screen.getByLabelText('Start Mic'))

    await waitFor(() => {
      mockOnRecording(true)
      expect(screen.getByRole('textbox')).toHaveFocus()
    })

    await user.click(screen.getByLabelText('Stop Mic'))

    waitFor(() => {
      mockOnRecording(false)
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
})
