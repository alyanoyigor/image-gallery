import styled from 'styled-components';

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
