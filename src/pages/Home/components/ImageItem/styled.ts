import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as LikeIcon } from 'assets/svg/like.svg';
import LikeEmptyIcon from 'assets/svg/like-empty.svg';

export const StyledImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

export const StyledImageSkeleton = styled.div`
  height: 240px;
  width: 100%;

  position: relative;
  overflow: hidden;
  background-color: #aaaaaa;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.2) 20%,
      rgba(255, 255, 255, 0.5) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;

export const StyledImageItem = styled.li`
  display: flex;
  flex-flow: column;
`;

export const StyledImageLink = styled(Link)`
  position: relative;
`;

export const StyledLikeIcon = styled(LikeIcon)`
  width: 19px;
  height: 19px;
  fill: #c71306;
`;

export const StyledLikeEmptyIcon = styled.img.attrs({
  src: LikeEmptyIcon,
  alt: 'Empty Like',
})`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;

  width: 32px;
  height: 32px;
`;

export const StyledLikeButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #ffffff;
`;
