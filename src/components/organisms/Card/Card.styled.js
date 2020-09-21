import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 400px;
  height: 200px;

  background-color: ${({ theme }) => theme.primary.gray};
  box-shadow: 0px 0px 45px rgba(10, 16, 75, 0.1);
  border-radius: 2px;
  padding: 10px;
  // position: relative;
`;
