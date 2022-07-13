import {fireEvent, render, screen} from '@testing-library/react'
import React from 'react'
import App from './App'

describe('Speech Assistant App', () => {
  it('should show Consultation Notes button when App is initialized', () => {
    render(<App />)

    expect(
      screen.getByRole('button', {
        name: 'Consultation Notes',
      }),
    ).toBeInTheDocument()
  })

  it('should show Consultation Pad when Consultation Notes button is clicked', () => {
    render(<App />)
    const consultationNotesButtonName = {
      name: 'Consultation Notes',
    }

    fireEvent.click(screen.getByRole('button', consultationNotesButtonName))

    expect(screen.getByText('Hello This is a div')).toBeInTheDocument()
    expect(screen.queryByRole('button', consultationNotesButtonName)).toBeNull()
  })

  it('should show Consultation Notes button when Consultation pad is closed', () => {
    render(<App />)
    const consultationNotesButtonName = {
      name: 'Consultation Notes',
    }
    fireEvent.click(screen.getByRole('button', consultationNotesButtonName))

    fireEvent.click(screen.getByRole('button', {name: 'close'}))

    expect(screen.queryByText('Hello This is a div')).toBeNull()
    expect(
      screen.getByRole('button', consultationNotesButtonName),
    ).toBeInTheDocument()
  })
})
