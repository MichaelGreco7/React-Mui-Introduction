import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const App = () => {
  return (
    <div style={styles}>
      <Hello />
    </div>
  );
};

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

render(<App />, document.getElementById('root'));
