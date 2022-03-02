import { render, screen, fireEvent } from '@testing-library/react'

import Accordion from './Accordion'

describe('Accordion', () => {
  describe('When i give it a title', () => {
    it('Should render a title', () => {
      render(<Accordion title="test title" />)
      const title = screen.getByRole('button').textContent
      expect(title).toBe('test title')
    })
  })

  describe('When i give it content', () => {
    it('should render the content', () => {
      render(
        <Accordion title="test title">
          <p data-testid="content">test content</p>
        </Accordion>
      )
      const title = screen.getByRole('button').textContent
      expect(title).toBe('test title')
      const content = screen.getByTestId('content').textContent
      expect(content).toBe('test content')
    })
  })

  describe("When i don't give it a default state", () => {
    it('Should render closed', () => {
      render(
        <Accordion title="test title">
          <p>test content</p>
        </Accordion>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('accordion-close')
    })
  })

  describe('When i give it a default state of open', () => {
    it('Should render open', () => {
      render(
        <Accordion title="test title" open="true">
          <p>test content</p>
        </Accordion>
      )
      const button = screen.getByRole('button')
      expect(button).toHaveClass('accordion-open')
    })
  })

  describe('When it is close and that i click on the button', () => {
    it('Should open', () => {
      render(
        <Accordion title="test title">
          <p>test content</p>
        </Accordion>
      )
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(button).toHaveClass('accordion-open')
    })
  })

  describe('When it is open and that i click on the button', () => {
    it('Should close', () => {
      render(
        <Accordion title="test title" open="true">
          <p>test content</p>
        </Accordion>
      )
      const button = screen.getByRole('button')
      fireEvent.click(button)
      expect(button).toHaveClass('accordion-close')
    })
  })
})
