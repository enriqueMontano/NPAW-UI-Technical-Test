import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 246px;
  background-color: ${({ theme }) => theme.primary.darkGray};
  min-width: 40%;

  .label-container {
    margin-left: 12px;
    padding: 0px 8px;
    background-color: ${({ theme }) => theme.primary.gray};
    border-radius: 2px;

    display: flex;
    align-items: center;
    width: 100%;
  }

  .button-container {
    margin-left: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-width: 100%;

    .label-container {
      margin: 2% 0px;
    }
  }
`;
