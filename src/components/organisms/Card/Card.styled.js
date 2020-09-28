import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.primary.gray};
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  border-radius: 2px;
  padding: 10px;
`;

export const CardListWrapper = styled(Card)`
  width: 200px;
  height: 200px;

  .user-info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;

export const CardDetailsWrapper = styled(Card)`
  width: 500px;
  height: 500px;

  .avatar-container {
    margin: 5%;
  }

  .user-info-container {
    display: grid;
    grid-gap: 5%;
  }

  .button-container {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5%;
  }
`;
