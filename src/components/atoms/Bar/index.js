import styled from 'styled-components';

export const Bar = styled.div`
  width: 49px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: ${({ active, theme }) => (active ? theme.primary.lightBlue : theme.primary.ultraLightBlue)};
`;
