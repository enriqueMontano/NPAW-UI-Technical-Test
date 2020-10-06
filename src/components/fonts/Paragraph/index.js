import styled from 'styled-components';

export const ParagraphMedium = styled.p`
  font-family: 'Nitty-Medium';
  color: ${({ color }) => color || '#0F1C51'};
  font-size: ${({ size }) => size || '15px'};
  line-height: 18px;
  font-weight: 500;
`;

export const ParagraphItalic = styled(ParagraphMedium)`
  font-family: 'Nitty-Light-Italic';
  font-weight: 300;
`;
