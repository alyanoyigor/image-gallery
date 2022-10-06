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

  button,
  input[type="submit"],
  input[type="reset"] {
	  background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;
  }
`;
