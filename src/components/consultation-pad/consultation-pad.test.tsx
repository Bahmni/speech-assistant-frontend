import {render, screen} from '@testing-library/react'
import React from 'react'
import {ConsultationPad} from './consultation-pad'

describe('Consultation Pad', () => {
  it('should show Consultation Notes heading when Consultation pad component is rendered', () => {
    render(<ConsultationPad isConsultationPadClosed={false} />)
    expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
  })
  it('should show start mic when Consultation pad component is rendered', () => {
    render(<ConsultationPad isConsultationPadClosed={false} />)
    expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
  })
})
