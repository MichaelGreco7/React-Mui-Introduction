import React from 'react';
import { Grid } from '@material-ui/core';
import Left from './Left';
import Right from './Right';

const styles = {
  Paper: { padding: 20, marginTop: 10, marginBottom: 10 },
};

export default (props) => (
  <Grid container>
    <Grid item sm>
      <Left styles={styles}></Left>
    </Grid>
    <Grid item sm>
      <Right styles={styles}></Right>
    </Grid>
  </Grid>
);
