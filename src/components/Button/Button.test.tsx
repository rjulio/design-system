import '@styles/components/Button/default.css';
import { render } from '@testing-library/react';
import { Button, ButtonProps } from '.';
import { vi } from 'vitest';

function createComponent(props: Partial<ButtonProps> = {}) {
  const clickFn = vi.fn();
  const comp = render(
    <Button
      {...props}
      ariaLabel="teste"
      onClick={clickFn}
    >
      Click me
    </Button>
  );
  return { comp, clickFn }
}

describe('Button', () => {
  test('button should be rendered', () => {
    const { comp } = createComponent();

    expect(comp.container).toBeInTheDocument();
  });

  test('button should have the correct aria-label', () => {
    const { comp } = createComponent();

    const button = comp.getByLabelText('teste');

    expect(button).toBeInTheDocument();
  });

  test('button should have the correct primary variant and be md sized', () => {
    const { comp } = createComponent({ variant: 'primary', size: 'md' });

    const button = comp.getByRole('button');

    expect(button).toHaveClass('button--primary md');
  });

  test('button should have the correct secondary variant and be sm sized', () => {
    const { comp } = createComponent({ variant: 'secondary', size: 'sm' });

    const button = comp.getByRole('button');

    expect(button).toHaveClass('button--secondary sm');
  });

  test('button should have title attr when passed as prop', () => {
    const { comp } = createComponent({ title: 'Click me' });

    const button = comp.getByRole('button');

    expect(button).toHaveAttribute('title', 'Click me');
  });

  test('button should accept style from props', () => {
    const { comp } = createComponent({ style: { backgroundColor: 'red' } });

    const button = comp.getByRole('button');

    expect(button).toHaveStyle('background-color: rgb(255, 0, 0)');
  });

  test('button should trigger onClick event', () => {
    const { comp, clickFn } = createComponent();

    const button = comp.getByRole('button');

    button.click();

    expect(clickFn).toHaveBeenCalled();
  });
});