import {render, screen} from '@testing-library/react'
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

    // expect(screen.getByText('Hello This is a div')).toBeInTheDocument()
    expect(
      screen.queryByRole('button', consultationNotesButtonName),
    ).not.toBeInTheDocument()
  })

  //Test cases for consultation pad components
  it('should show consultation pad components when clicked on consultation notes button', async () => {
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

  it('should toggle between start mic and stop mic when clicked', async () => {
    user.click(screen.getByLabelText('Start Mic'))
    await waitFor(() => {
      expect(screen.getByLabelText('Stop Mic')).toBeInTheDocument()
    })

    user.click(screen.getByLabelText('Stop Mic'))
    await waitFor(() => {
      expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    })
  })

  it('should focus on the textarea when start mic and stop mic are clicked', async () => {
    user.click(screen.getByLabelText('Start Mic'))
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus()
      expect(screen.getByLabelText('Stop Mic'))
    })
    user.click(screen.getByLabelText('Stop Mic'))
    await waitFor(() => {
      expect(screen.getByRole('textbox')).toHaveFocus()
    })
  })

  it('should enable save button when text is present in text area', async () => {
    user.type(screen.getByRole('textbox'), 'Consultation Notes')
    await waitFor(() => {
      expect(
        screen.getByRole('button', {
          name: /Save/i,
        }),
      ).toBeEnabled()
    })
  })

  it('should show Consultation Notes button when Consultation pad is closed', async () => {
    await user.click(screen.getByRole('button', {name: /close/i}))

    expect(screen.queryByText('Hello This is a div')).not.toBeInTheDocument()
    expect(
      screen.getByRole('button', consultationNotesButtonName),
    ).toBeInTheDocument()
  })
})
