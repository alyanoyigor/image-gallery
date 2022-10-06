import { StyledHeader, StyledLink, StyledLinkList, StyledNav } from './styled';

export const Header = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <StyledLinkList>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </StyledLinkList>
      </StyledNav>
    </StyledHeader>
  );
};
