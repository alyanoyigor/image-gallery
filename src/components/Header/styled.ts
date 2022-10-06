import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme.primary.main};
`;

export const StyledNav = styled.nav``;

export const StyledLinkList = styled.ul`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  color: #000000;
  letter-spacing: -1px;

  &.active {
    font-weight: 400;
    pointer-events: none;
  }
`;
