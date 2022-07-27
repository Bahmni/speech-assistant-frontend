import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from './App'

describe('Speech Assistant App', () => {
  it('should show Consultation Notes button when App is initialized', () => {
    render(<App />)

    expect(
      screen.getByRole('button', {
        name: /Consultation Notes/i,
      }),
    ).toBeInTheDocument()
  })

  it('should show Consultation Pad when Consultation Notes button is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const consultationNotesButtonName = {
      name: /Consultation Notes/i,
    }

    await user.click(screen.getByRole('button', consultationNotesButtonName))

    expect(screen.getByText('Hello This is a div')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', consultationNotesButtonName),
    ).not.toBeInTheDocument()
  })

  it('should show Consultation Notes button when Consultation pad is closed', async () => {
    const user = userEvent.setup()
    render(<App />)
    const consultationNotesButtonName = {
      name: /Consultation Notes/i,
    }
    await user.click(screen.getByRole('button', consultationNotesButtonName))

    await user.click(screen.getByRole('button', {name: /close/i}))

    expect(screen.queryByText('Hello This is a div')).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', consultationNotesButtonName),
    ).toBeInTheDocument()
  })
})
