import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`  
  * {
    box-sizing: border-box;
  };

  body {
    color: #342921;
    background-color: #dad7d4;
    font-family: "Open Sans","Roboto","Helvetica","Arial",sans-serif;
  };
  
  body,
  ul {
    margin: 0;
    padding: 0;
  };
`;
