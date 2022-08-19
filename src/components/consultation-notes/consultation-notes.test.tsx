import {render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import ConsultationNotes from './consultation-notes'

describe('Floating Button and Consultation Pad', () => {
  it('should show Consultation Notes button when Consultation Notes component is rendered', () => {
    render(<ConsultationNotes />)

    expect(
      screen.getByRole('button', {
        name: /Consultation Notes/i,
      }),
    ).toBeInTheDocument()
  })

  it('should show Consultation Pad when Consultation Notes button is clicked', async () => {
    render(<ConsultationNotes />)
    const consultationNotesButtonName = {
      name: /Consultation Notes/i,
    }

    await userEvent.click(
      screen.getByRole('button', consultationNotesButtonName),
    )

    await waitFor(() => {
      expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
    })
    expect(
      screen.queryByRole('button', consultationNotesButtonName),
    ).not.toBeInTheDocument()
  })

  it('should show Consultation Notes button when Consultation pad is closed', async () => {
    render(<ConsultationNotes />)
    const consultationNotesButtonName = {
      name: /Consultation Notes/i,
    }

    await userEvent.click(
      screen.getByRole('button', consultationNotesButtonName),
    )
    await userEvent.click(screen.getByRole('button', {name: /close/i}))

    await waitFor(() => {
      expect(
        screen.getByRole('button', consultationNotesButtonName),
      ).toBeInTheDocument()
    })
  })
})
