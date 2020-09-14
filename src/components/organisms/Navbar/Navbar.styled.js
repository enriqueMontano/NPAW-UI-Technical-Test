import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.primary.darkGray};
  padding: 24px;
  position: sticky;

  .logo-container {
    display: flex;
  }
`;
