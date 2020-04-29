import React, { Fragment, Component } from 'react';
import { Header, Footer } from './layouts';
import Exercise from './exerciseComponent';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercise />
        <Footer />
      </Fragment>
    );
  }
}
