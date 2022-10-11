import React from 'react'
import {render, screen} from '@testing-library/react'
import {DraggableBox} from './draggable-box'
import userEvent from '@testing-library/user-event'

describe('Draggable Box', () => {
  const children = <h1>hello</h1>
  const handleMinimize = jest.fn()
  it('should show heading, minimize icon and child components when draggable box is rendered', () => {
    render(
      <DraggableBox
        heading={'Consultation notes'}
        handleMinimize={handleMinimize}
      >
        {children}
      </DraggableBox>,
    )
    expect(screen.getByRole('heading', {name: /Consultation Notes/i}))
    expect(screen.getByLabelText('minimizeIcon')).toBeInTheDocument()
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('should close draggable box when clicked on minimize icon', async () => {
    render(
      <DraggableBox
        heading={'Consultation notes'}
        handleMinimize={handleMinimize}
      >
        {children}
      </DraggableBox>,
    )
    await userEvent.click(screen.getByLabelText('minimizeIcon'))
    expect(handleMinimize).toBeCalled()
  })
})
