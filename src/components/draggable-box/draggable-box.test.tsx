import React from 'react'
import {render, screen} from '@testing-library/react'
import {DraggableBox} from './draggable-box'
import userEvent from '@testing-library/user-event'

describe('Draggable Box', () => {
  let child = <h1>hello</h1>
  let handleClose = jest.fn()

  it('should show heading, close button and child components when draggable box is rendered', () => {
    render(
      <DraggableBox
        children={child}
        heading={'Consultation notes'}
        handleClose={handleClose}
      />,
    )
    expect(screen.getByRole('heading', {name: /Consultation Notes/i}))
    expect(screen.getByLabelText('close')).toBeInTheDocument()
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('should close draggable box when we clicked on close button', async () => {
    render(
      <DraggableBox
        children={child}
        heading={'Consultation notes'}
        handleClose={handleClose}
      />,
    )
    await userEvent.click(screen.getByLabelText('close'))
    expect(handleClose).toBeCalled()
  })
})
