import React from 'react';
import { InputWrapper } from './Input.styled';

export const Input = React.forwardRef(
  ( { name, type = 'text', placeHolder }, ref) => {
    return (
      <InputWrapper>
        <input ref={ref} name={name} type={type} placeholder={placeHolder} />
      </InputWrapper>
    );
  }
);
