import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80px;
  height: 80px;

  border-radius: 50%;

  background: ${({ image }) => `url(${image})`};
  background-size: contain;
  background-position: center;
  font-family: 'Nitty-Light-Italic';
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #000;
`;
