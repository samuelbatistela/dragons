import React from 'react';
import styled from 'styled-components';

const Button = styled.button``;

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ label, onClick }) => (
  <Button onClick={onClick}>{label}</Button>
);

export default ButtonComponent;
