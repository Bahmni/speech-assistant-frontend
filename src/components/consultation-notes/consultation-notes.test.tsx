import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ConsultationNotes from './consultation-notes'

describe('Floating Button and Consultation Pad', () => {
  it('should show consultation pad when consultation pad button is clicked', async () => {
    render(<ConsultationNotes />)

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
    render(<ConsultationNotes />)

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
})
