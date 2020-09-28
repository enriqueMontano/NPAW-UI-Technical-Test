import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Nitty-Medium';
  color: ${({ theme, color }) => color || theme.primary.gray};
  background: ${({ theme, color }) => color || theme.primary.darkGray};
  font-size: ${({ size }) => size || '35px'};
  font-weight: 500;
  line-height: 42px;
`;

const Subtitle = styled.h2`
  font-family: 'Nitty-Medium';
  color: ${({ theme, color }) => color || theme.primary.blue};
  font-size: ${({ size }) => size || '20px'};
  letter-spacing: 0.002em;
  line-height: 24px;
  font-weight: 500;
`;
const SubtitleLight = styled.h3`
  font-family: 'Nitty-Light';
  color: ${({ theme, color }) => color || theme.primary.blue};
  font-size: ${({ size }) => size || '18px'};
  letter-spacing: 0.002em;
  line-height: 24px;
  font-weight: 300;
`;

export { Title, Subtitle, SubtitleLight };
