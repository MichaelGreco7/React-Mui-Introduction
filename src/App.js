import React, { Component } from 'react';
import { Paper, Typography, TextField, Button } from '@material-ui/core';

export default class App extends Component {
  handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const title = this.state;
    return (
      <Paper>
        <form>
          <TextField
            name="title"
            label="Exercise"
            value={title}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button type="submit" color="primary" variant="raised">
            Create
          </Button>
        </form>
      </Paper>
    );
  }
}
