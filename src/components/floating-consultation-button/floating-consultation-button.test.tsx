import {render, screen} from '@testing-library/react'
import React from 'react'
import {FloatingConsultationButton} from './floating-consultation-button'

describe('Floating Consultation Button', () => {
  const mockSetShowConsultationPad = jest.fn()
  it('should show consultation pad button when floating consultation button component is rendered', () => {
    render(
      <FloatingConsultationButton
        setShowConsultationPad={mockSetShowConsultationPad}
        isUnsavedNotesPresent={false}
      />,
    )

    expect(
      screen.getByRole('button', {
        name: /Notes/i,
      }),
    ).toBeInTheDocument()
  })

  it('should not show warning filled icon when unsaved notes are not present in the text area ', () => {
    render(
      <FloatingConsultationButton
        setShowConsultationPad={mockSetShowConsultationPad}
        isUnsavedNotesPresent={false}
      />,
    )

    expect(screen.getByRole('button', {name: /Notes/i})).toBeInTheDocument()

    expect(screen.queryByLabelText('warningFilled')).not.toBeInTheDocument()
  })

  it('should show warning filled icon when unsaved notes are present in the text area', () => {
    render(
      <FloatingConsultationButton
        setShowConsultationPad={mockSetShowConsultationPad}
        isUnsavedNotesPresent
      />,
    )

    expect(screen.getByRole('button', {name: /Notes/i})).toBeInTheDocument()

    expect(screen.getByLabelText('warningFilled')).toBeInTheDocument()
  })
})
