import React, { Fragment, Component } from 'react';
import { Header, Footer } from './layouts';
import Exercises from './exercises';

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Exercises />
        <Footer />
      </Fragment>
    );
  }
}
