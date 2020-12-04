import { createGlobalStyle } from 'styled-components';
import theme from './theme/theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;700&display=swap');

  body {
    font-family: 'Nunito', sans-serif;
    background: ${theme.palette.background.body};
    color: ${theme.palette.text.primary};
    ${theme.typography.body};
    overflow-y: scroll;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
