import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 246px;
  background-color: ${({ theme }) => theme.primary.darkGray};

  .label-container {
    margin-left: 12px;
    background-color: ${({ theme }) => theme.primary.gray};
    border-radius: 2px;

    display: flex;
    align-items: center;
  }

  .button-container {
    margin-left: 10px;
  }
`;
