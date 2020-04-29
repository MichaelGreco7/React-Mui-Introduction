import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

export default class App extends Component {
  state = { exercises: [], title: '' };

  render() {
    return (
      <Typography vartient="display1" align="center" gutterBottom>
        {' '}
        Center
      </Typography>
    );
  }
}
