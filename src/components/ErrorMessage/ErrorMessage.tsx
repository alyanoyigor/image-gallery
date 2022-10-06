import { ReactNode } from 'react';
import { StyledError } from './styled';

type ErrorMessageProps = {
  children: ReactNode;
};

export const ErrorMessage = (props: ErrorMessageProps) => {
  const { children } = props;

  return <StyledError>{children}</StyledError>;
};
