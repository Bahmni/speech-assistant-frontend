import {render, screen} from '@testing-library/react'
import React from 'react'
import {FloatingConsultationButton} from './floating-consultation-button'

describe('Floating Consultation Button', () => {
  const mockSetShowConsultationPad = jest.fn()
  it('should show consultation pad button when floating consultation button component is rendered', () => {
    render(
      <FloatingConsultationButton
        setShowConsultationPad={mockSetShowConsultationPad}
        isConsulationTextPresent={false}
      />,
    )

    expect(
      screen.getByRole('button', {
        name: /Consultation Pad/i,
      }),
    ).toBeInTheDocument()
  })

  it('should not show warning filled icon when consultation text is not present in the text area ', () => {
    render(
      <FloatingConsultationButton
        setShowConsultationPad={mockSetShowConsultationPad}
        isConsulationTextPresent={false}
      />,
    )

    expect(
      screen.getByRole('button', {name: /Consultation Pad/i}),
    ).toBeInTheDocument()

    expect(screen.queryByLabelText('warningFilled')).not.toBeInTheDocument()
  })

  it('should show warning filled icon when consultation text is present in the text area', () => {
    render(
      <FloatingConsultationButton
        setShowConsultationPad={mockSetShowConsultationPad}
        isConsulationTextPresent={true}
      />,
    )

    expect(
      screen.getByRole('button', {name: /Consultation Pad/i}),
    ).toBeInTheDocument()

    expect(screen.getByLabelText('warningFilled')).toBeInTheDocument()
  })
})
