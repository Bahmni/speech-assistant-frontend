import {render, screen} from '@testing-library/react'
import React from 'react'
import {ConsultationPad} from './consultation-pad'

describe('Consultation Pad', () => {
  it('should show consultation notes heading, close button, start mic and save button when consultation pad component is rendered', () => {
    render(<ConsultationPad setConsultationPadToClosed={true} />)

    expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /close/i}))
    expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /Save/i})).toBeDisabled()
  })
})
