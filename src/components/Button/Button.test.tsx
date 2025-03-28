import '@styles/components/Button/default.css';
import { render } from '@testing-library/react';
import { Button } from './Button';

function makeSut() {
  return render(<Button ariaLabel="teste">Click me</Button>);
}

test('Button', () => {
  const sut = makeSut()

  expect(sut.container).toBeInTheDocument()
})