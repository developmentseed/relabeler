import React, { Component } from 'react';
import 'typeface-roboto'; // eslint-disable-line
import CssBaseline from '@material-ui/core/CssBaseline';
import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import red from '@material-ui/core/colors/red';
import { ThemeProvider } from '@material-ui/styles';
import Home from './components/Home';

const theme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: red
  }
});

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    );
  }
}

export default App;
