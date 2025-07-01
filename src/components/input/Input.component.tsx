import React, { FC, ChangeEvent, MouseEvent } from 'react';
import {
  ButtonAlert,
  Container,
  ErrorText,
  IconWrapper,
  Label,
  StyledInput,
  Wrapper,
} from './Input.styles';

type InputProps = {
  name: string;
  value: string;
  type: string;
  autoComplete: string;
  label: string;
  errorText: string;
  error: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: React.FC;
  onIconClick?: (e: MouseEvent<HTMLDivElement>) => void;
  maxLength: number;
};

const InputComponent: FC<InputProps> = ({
  name,
  value,
  type,
  autoComplete,
  label,
  errorText,
  error,
  onChange,
  icon: Icon,
  onIconClick,
  maxLength,
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Wrapper>
        <StyledInput
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          autoComplete={autoComplete}
          error={error}
          maxLength={maxLength}
        />
        {(error || Icon) && (
          <IconWrapper>
            {Icon && (
              <Wrapper onClick={onIconClick}>
                <Icon />
              </Wrapper>
            )}
            {error && <ButtonAlert type="button">!</ButtonAlert>}
          </IconWrapper>
        )}
      </Wrapper>
      {error && <ErrorText>{errorText}</ErrorText>}
    </Container>
  );
};

export default InputComponent;
