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
      expect(screen.getByTitle('ConsultationPad')).toBeInTheDocument()
    })
  })

  it('should show modal components when clicked on consultation button', async () => {
    expect(await screen.findByText('Consultation Notes')).toBeInTheDocument()
    expect(screen.getByRole('textArea')).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByTitle('microPhoneIcon')).toBeInTheDocument()
    })
    await waitFor(() => {
      expect(screen.getByRole('saveButton')).toBeDisabled()
    })
  })

  it('should toggle between microphone button and stop button when clicked', async () => {
    userEvent.click(screen.getByTitle('microPhoneIcon'))
    await waitFor(() => {
      expect(screen.getByTitle('stopIcon')).toBeInTheDocument()
    })

    userEvent.click(screen.getByTitle('stopIcon'))
    await waitFor(() => {
      expect(screen.getByTitle('microPhoneIcon')).toBeInTheDocument()
    })
  })

  it('should focus the textarea when microphone and stop icons are clicked', async () => {
    userEvent.click(screen.getByTitle('microPhoneIcon'))
    await waitFor(() => {
      expect(screen.getByRole('textArea')).toHaveFocus()
    })
    userEvent.click(screen.getByTitle('stopIcon'))
    await waitFor(() => {
      expect(screen.getByRole('textArea')).toHaveFocus()
    })
  })

  it('should enable save button when text is present in text area', async () => {
    userEvent.type(screen.getByRole('textArea'), 'Consultation Notes')
    await waitFor(() => {
      expect(screen.getByRole('saveButton')).toBeEnabled()
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
