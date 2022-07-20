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

  it('should show modal component when clicked on consultation button', async () => {
    expect(await screen.findByText('Consultation Notes')).toBeInTheDocument()
    expect(screen.getByRole('textArea')).toBeInTheDocument()
  })

  it('should toggle between microphone button and stop button', async () => {
    userEvent.click(screen.getByRole('microPhoneButton'))
    await waitFor(() => {
      expect(screen.getByRole('stopButton')).toBeInTheDocument()
    })
    userEvent.click(screen.getByRole('stopButton'))

    await waitFor(() => {
      expect(screen.getByRole('microPhoneButton')).toBeInTheDocument()
    })
  })

  it('should show save button when text is present inside text area', async () => {
    userEvent.type(screen.getByRole('textArea'), 'Consultation Notes')
    await waitFor(() => {
      expect(screen.getByRole('saveButton')).toBeInTheDocument()
    })
  })

  // it('should not show the consultation pad modal when clicked on close button', async () => {
  //   userEvent.click(screen.getByLabelText('close'))
  //   await waitFor(() => {
  //     expect(screen.getByTitle('ConsultationPad')).not.toBeInTheDocument()
  //   })
  // })
})
