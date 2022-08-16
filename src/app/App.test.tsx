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
})
