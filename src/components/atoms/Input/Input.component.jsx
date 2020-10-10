import React from 'react';
import { InputWrapper } from './Input.styled';

export const Input = React.forwardRef(
  ({ name, type = 'text', placeHolder, error }, ref) => {
    console.log(error);
    return (
      <InputWrapper error={error}>
        <input ref={ref} name={name} type={type} placeholder={placeHolder} />
      </InputWrapper>
    );
  }
);
