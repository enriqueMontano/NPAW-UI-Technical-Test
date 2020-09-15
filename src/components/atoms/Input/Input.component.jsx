import React from 'react';
import { InputWrapper } from './Input.styled';

export const Input = ({ name, type = 'text', placeHolder }) => (
  <InputWrapper>
    <input name={name} type={type} placeHolder={placeHolder} />
  </InputWrapper>
);
