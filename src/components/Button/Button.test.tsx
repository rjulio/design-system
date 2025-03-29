import '@styles/components/Button/default.css';
import { render } from '@testing-library/react';
import { Button, ButtonProps } from '.';
import { vi } from 'vitest';

function makeSut(props: Partial<ButtonProps> = {}) {
  return render(<Button {...props} ariaLabel="teste">Click me</Button>);
}

describe('Button', () => {
  test('button should be rendered', () => {
    const sut = makeSut();

    expect(sut.container).toBeInTheDocument();
  });

  test('button should have the correct aria-label', () => {
    const { getByLabelText } = makeSut();

    const button = getByLabelText('teste');

    expect(button).toBeInTheDocument();
  });

  test('button should have the correct primary variant and be md sized', () => {
    const sut = makeSut({ variant: 'primary', size: 'md' });

    const button = sut.getByRole('button');

    expect(button).toHaveClass('button--primary md');
  });

  test('button should have the correct secondary variant and be sm sized', () => {
    const { getByRole } = makeSut({ variant: 'secondary', size: 'sm' });

    const button = getByRole('button');

    expect(button).toHaveClass('button--secondary sm');
  });

  test('button should have title attr when passed as prop', () => {
    const { getByRole } = makeSut({ title: 'Click me' });

    const button = getByRole('button');

    expect(button).toHaveAttribute('title', 'Click me');
  });

  test('button should accept style from props', () => {
    const { getByRole } = makeSut({ style: { backgroundColor: 'red' } });

    const button = getByRole('button');

    expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  test('button should trigger onClick event', () => {
    const onClick = vi.fn();
    const { getByRole } = makeSut({ onClick });

    const button = getByRole('button');

    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});