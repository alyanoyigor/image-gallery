import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  list-style-type: none;
  padding: 0;
`;

export const StyledListItem = styled.li`
  display: flex;
`;

export const StyledListItemButton = styled.button`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.9);

  &.active {
    background-color: ${(props) => props.theme.primary.main};
    color: #ffffff;
    pointer-events: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    background-color: #aaaaaa;
  }
`;

export const StyledRightArrow = styled(StyledListItemButton)`
  &::after {
    content: '➡';
  }
`;

export const StyledLeftArrow = styled(StyledListItemButton)`
  &::after {
    content: '⬅';
  }
`;
