import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button.component';

describe('Button', () => {
  test('deve renderizar o texto correto', () => {
    render(<Button label="Clique aqui" onClick={() => {}} />);
    const buttonElement = screen.getByText('Clique aqui');
    expect(buttonElement).toBeInTheDocument();
  });

  test('deve chamar a função onClick quando clicado', () => {
    const handleClick = jest.fn();
    render(<Button label="Clique aqui" onClick={handleClick} />);
    const buttonElement = screen.getByText('Clique aqui');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
