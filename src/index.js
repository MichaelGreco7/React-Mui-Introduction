import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const App = () => {
  return <Hello />;
};

render(<App />, document.getElementById('root'));
