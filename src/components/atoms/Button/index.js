import styled from 'styled-components';

export const Button = styled.button`
  /* Overriding Default Button Styles */
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
`;

export const SearchButton = styled(Button)``;
