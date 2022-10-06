import styled from 'styled-components';
import Spinner from 'assets/svg/spinner2.svg';

export const StyledPreloader = styled.img.attrs({
  src: Spinner,
  alt: 'Spinner',
})`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  z-index: 100;
`;
