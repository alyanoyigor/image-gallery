import { StyledPreloader } from './styled';

type PreloaderProps = {
  width?: number;
  height?: number;
};

export const Preloader = (props: PreloaderProps) => {
  const { width, height } = props;

  return <StyledPreloader width={width} height={height} />;
};

Preloader.defaultProps = {
  width: 128,
  height: 128,
};
