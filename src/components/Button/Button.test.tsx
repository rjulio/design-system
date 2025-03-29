import '@styles/components/Button/default.css';
import { render } from '@testing-library/react';
import { Button } from './Button';

function makeSut() {
  return render(<Button ariaLabel="teste">Click me</Button>);
}

describe('Button', () => {
  test('button should be rendered', () => {
    const sut = makeSut()

    expect(sut.container).toBeInTheDocument()
  })

  test('button should have the correct aria-label', () => {
    const { getByLabelText } = makeSut()

    const button = getByLabelText('teste')

    expect(button).toBeInTheDocument()
  })

  test('button should have the correct primary variant and be md sized', () => {
    const sut = makeSut()

    const button = sut.getByRole('button')

    expect(button).toHaveClass('button--primary md')
  })

  test('button should have the correct secondary variant and be sm sized', () => {
    const { getByRole } = render(
      <Button variant="secondary" size="sm" ariaLabel="teste">
        Click me
      </Button>
    )

    const button = getByRole('button')

    expect(button).toHaveClass('button--secondary sm')
  })

  test('button should have title attr when passed as prop', () => {
    const { getByRole } = render(
      <Button title="Click me" ariaLabel="teste">
        Click me
      </Button>
    )

    const button = getByRole('button')

    expect(button).toHaveAttribute('title', 'Click me')
  })

  test('button should accept style from props', () => {
    const { getByRole } = render(
      <Button style={{ backgroundColor: 'red' }} ariaLabel="teste">
        Click me
      </Button>
    )

    const button = getByRole('button')

    expect(button).toHaveStyle('background-color: rgb(255, 0, 0)')
  })
})