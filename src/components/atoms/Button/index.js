import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Nitty-Medium';
  border-radius: 2px;

  /* Overriding Default Button Styles */
  box-shadow: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;

  /* Button states */
  &:hover:enabled {
    background-color: ${({ theme }) => theme.primary.darkGray};
    color: ${({ theme }) => theme.primary.gray};
    border: 1px solid ${({ theme }) => theme.primary.gray};
  }

  &:active:enabled {
    background-color: ${({ theme }) => theme.primary.gray};
    color: ${({ theme }) => theme.primary.darkGray};
    border: 1px solid ${({ theme }) => theme.primary.gray};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export const SearchButton = styled(Button)`
  background-color: ${({ theme }) => theme.primary.gray};
  color: ${({ theme }) => theme.secondary.darkGray};
  font-size: ${({ size }) => size || '15px'};
  line-height: 18px;
  font-weight: 500;
  min-height: 40px;
  min-width: ${({ width }) => width || '97px'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 250ms ease-in-out;
`;
