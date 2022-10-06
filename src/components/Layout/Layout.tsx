import { Outlet } from 'react-router-dom';

import { GlobalStyles } from 'styles/GlobalStyles';
import { Container } from 'components/Container';
import { Header } from 'components/Header';

export const Layout = () => {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
        <Outlet />
      </Container>
    </>
  );
};
