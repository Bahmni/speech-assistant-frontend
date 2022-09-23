import React from 'react'
import {render, screen} from '@testing-library/react'
import {DraggableBox} from './draggable-box'
import userEvent from '@testing-library/user-event'

describe('Draggable Box', () => {
  const children = <h1>hello</h1>
  const handleClose = jest.fn()
  const setConsultationText = jest.fn()
  const setSavedNotes = jest.fn()
  it('should show heading, minimize icon, close icon and child components when draggable box is rendered', () => {
    render(
      <DraggableBox
        heading={'Consultation notes'}
        handleClose={handleClose}
        setConsultationText={setConsultationText}
        setSavedNotes={setSavedNotes}
      >
        {children}
      </DraggableBox>,
    )
    expect(screen.getByRole('heading', {name: /Consultation Notes/i}))
    expect(screen.getByLabelText('minimizeIcon')).toBeInTheDocument()
    expect(screen.getByLabelText('close')).toBeInTheDocument()
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('should close draggable box when clicked on minimize icon', async () => {
    render(
      <DraggableBox
        heading={'Consultation notes'}
        handleClose={handleClose}
        setConsultationText={setConsultationText}
        setSavedNotes={setSavedNotes}
      >
        {children}
      </DraggableBox>,
    )
    await userEvent.click(screen.getByLabelText('minimizeIcon'))
    expect(handleClose).toBeCalled()
  })

  it('should close draggable box when clicked on close icon', async () => {
    render(
      <DraggableBox
        heading={'Consultation notes'}
        handleClose={handleClose}
        setConsultationText={setConsultationText}
        setSavedNotes={setSavedNotes}
      >
        {children}
      </DraggableBox>,
    )
    await userEvent.click(screen.getByLabelText('close'))
    expect(handleClose).toBeCalled()
    expect(setConsultationText).toHaveBeenCalledWith('')
  })
})
