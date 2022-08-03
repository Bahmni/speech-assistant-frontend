import {render, screen} from '@testing-library/react'
import React from 'react'
import {FloatingConsultationButton} from './floating-consultation-button'

describe('Floating Button', () => {
  it('should show Floating Consultation Notes button', () => {
    render(<FloatingConsultationButton buttonVisibility={true} />)

    expect(
      screen.getByRole('button', {
        name: /Consultation Notes/i,
      }),
    ).toBeInTheDocument()
  })
})
