import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.primary.darkGray};
  padding: 18px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;

  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);

  .logo-container {
    display: flex;
  }
`;
