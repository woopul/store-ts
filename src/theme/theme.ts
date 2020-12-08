const theme = {
  palette: {
    primary: {
      main: '#FF5500',
      light: '#FD6E35',
      dark: '#CC4400'
    },
    attention: {
      main: '#F9A52B',
    },
    background: {
      body: '#F8F8FA',
    },
    button: {
      primary: '#4460F7',
      hover: '#2140E8',
      disabled: '#9194A5',
      borderSecondary: '#4460F7'
    },
    text: {
      primary: '#000',
      cardDescription: '#9194A5',
      paginationCurrent: "#4460F7",
      paginationHover: "#2140E8",
      paginationDiabled: "#9194A5",
    }
  },
  spacing: (multiplier = 1) => `${4 * multiplier}px`,
  typography: {
    h1: {
      'font-weight': 'bold',
      'font-size': '68px'
    },
    h2: {
      'font-weight': 'bold',
      'font-size': '50px'
    },
    h3: {
      'font-weight': 'bold',
      'font-size': '38px'
    },
    h4: {
      'font-weight': 'bold',
      'font-size': '28px'
    },
    h5: {
      'font-weight': 'bold',
      'font-size': '22px'
    },
    h6: {
      'font-weight': 'bold',
      'font-size': '16px'
    },
    body: {
      'font-weight': 'normal',
      'font-size': '14px'
    },
    button: {
      'font-weight': 'bold',
      'font-size': '14px',
      'text-transform': 'uppercase'
    }
  }
};

export default theme;
