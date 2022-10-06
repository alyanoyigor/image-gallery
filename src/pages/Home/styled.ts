import styled from 'styled-components';

export const StyledImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 8px;
`;

export const StyledImageItem = styled.li`
  display: flex;
  flex-flow: column;
`;
