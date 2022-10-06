import { ReactNode } from 'react';
import { StyledContainer } from './styled';

type ContainerProps = {
  children: ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { children } = props;

  return <StyledContainer>{children}</StyledContainer>;
};
