import React from 'react';
import { AvatarWrapper } from './Avatar.styled';

export const Avatar = ({ image, width, height }) => (
  <AvatarWrapper image={image} width={width} height={height}></AvatarWrapper>
);
