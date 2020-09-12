import styled from 'styled-components';

const ParagraphMedium = styled.p`
  font-family: 'Nitty-Medium';
  color: ${({ theme, color }) => color || '#0F1C51'};
  font-size: ${({ size }) => size || '15px'};
  line-height: 18px;
  font-weight: 500;
`;

const ParagraphItalic = styled(ParagraphMedium)`
  font-family: 'Nitty-Light-Italic';
  font-weight: 300;
`;

const ParagraphLight = styled.p`
  font-family: 'Nitty-Light';
  color: ${({ theme, color, active, alert }) => {
    if (color) return color;
    if (active) return '#246CF0';
    if (alert) return '#FC9A94';
    return '#0F1C51';
  }};
  font-size: ${({ size }) => size || '16px'};
  line-height: 22px;
  font-weight: ${({ active }) => (active ? 800 : 300)};
  text-align: ${({ align }) => align || 'left'};
`;

const SubParagraphMedium = styled.p`
  font-family: 'Nitty-Medium';
  color: ${({ theme, color }) => color || '#0F1C51'};
  font-size: ${({ size }) => size || '13px'};
  line-height: 16px;
  font-weight: 500;
`;

const SubParagraphLight = styled(SubParagraphMedium)`
  font-family: 'Nitty-Light';
  color: ${({ theme, color }) => color || '#0F1C51'};
  font-size: ${({ size }) => size || '13px'};
  line-height: 16px;
  font-weight: 300;
`;

export {
  ParagraphMedium,
  ParagraphLight,
  ParagraphItalic,
  SubParagraphMedium,
  SubParagraphLight,
};
