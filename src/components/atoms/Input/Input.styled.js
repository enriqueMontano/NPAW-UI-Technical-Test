import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: ${({ width }) => width || '100%'};
  background-color: ${({ theme }) => theme.primary.gray};

  input {
    min-height: 40px;

    display: block;
    width: ${({ width }) => width || '100%'};
    border: none;
    border-bottom: ${({ theme, error }) =>
      error ? `2px solid ${theme.secondary.red}` : `none`};
    border-radius: 2px;

    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    font-family: 'Nitty-Light';
    color: ${({ theme, error }) =>
      error ? theme.secondary.red : theme.primary.darkGray};
    background: ${({ theme }) => theme.primary.gray};

    &::placeholder {
      font-weight: 300;
      font-size: 15px;
      line-height: 18px;
    }
  }

  input:focus {
    outline: none;
  }
`;
