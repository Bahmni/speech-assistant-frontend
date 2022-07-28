import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import {ConsultationButton} from './components/consultation-button/consultation-button'

describe('Consultation Pad', () => {
  beforeEach(async () => {
    render(<ConsultationButton />)
    userEvent.click(
      screen.getByRole('button', {
        name: /Consultation/i,
      }),
    )
    await waitFor(() => {
      expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
    })
  })

  it('should show modal components when clicked on consultation button', async () => {
    expect(await screen.findByText('Consultation Notes')).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeDisabled()
    })
  })

  it('should toggle between microphone button and stop button when clicked', async () => {
    userEvent.click(screen.getByLabelText('Start Mic'))
    await waitFor(() => {
      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })

    userEvent.click(screen.getByLabelText('Stop Mic'))
    await waitFor(() => {
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    })
  })

  it('should focus the textarea when microphone and stop icons are clicked', async () => {
    userEvent.click(screen.getByLabelText('Start Mic'))
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus()
    })
    userEvent.click(screen.getByLabelText('Stop Mic'))
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus()
    })
  })

  it('should enable save button when text is present in text area', async () => {
    userEvent.type(screen.getByRole('textbox'), 'Consultation Notes')
    await waitFor(() => {
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeEnabled()
    })
  })

  it('should not show the consultation pad modal when clicked on close button', async () => {
    await waitFor(() => {
      expect(screen.getByRole('button', {name: /close/i})).toBeInTheDocument()
    })
    userEvent.click(screen.getByLabelText('close'))
    await waitFor(() => {
      screen.getByRole('button', {
        name: /Consultation/i,
      })
    })
  })
})
