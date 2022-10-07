import styled from 'styled-components';

export const StyledImageList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 8px;
  margin-bottom: 16px;
`;

export const StyledActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0;
`;

export const StyledSelect = styled.select`
  max-width: 100px;
  height: 40px;
  width: 100%;
  font-size: 16px;
  font-weight: 400;
  appearance: none;
  color: ${(props) => props.theme.primary.main};
  outline: none;

  background-color: transparent;
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  border-radius: $radius;
  border: 1px solid ${(props) => props.theme.primary.main};

  padding: 9px 32px 7px 16px;
  background-image: url("data:image/svg+xml;utf8,<svg fill='342921' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  text-overflow: ellipsis;
  cursor: pointer;
`;
