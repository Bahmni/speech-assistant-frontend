import {render, screen} from '@testing-library/react'
import React from 'react'
import {ConsultationPad} from './consultation-pad'

describe('Consultation Pad', () => {
  it('should show consultation notes heading, minimize icon, close icon, start mic and save button when consultation pad component is rendered', () => {
    render(
      <ConsultationPad
        setShowConsultationPad={jest.fn()}
        consultationText={''}
        setConsultationText={jest.fn()}
        setSavedNotes={jest.fn()}
      />,
    )

    expect(screen.getByRole('heading', {name: /Consultation Notes/i}))
    expect(screen.getByText('Consultation Notes')).toBeInTheDocument()
    expect(screen.getByLabelText('minimizeIcon')).toBeInTheDocument()
    expect(screen.getByLabelText('close')).toBeInTheDocument()
    expect(screen.getByLabelText('Start Mic')).toBeInTheDocument()
  })
})
