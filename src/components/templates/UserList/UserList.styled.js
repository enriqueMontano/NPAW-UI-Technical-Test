import styled from 'styled-components';

export const UserListWrapper = styled.div`
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;
    justify-items: center;
    column-gap: 10px;
    row-gap: 40px;
    margin: 5%;
  }
`;
