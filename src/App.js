import React from 'react';
import './App.css';
import '../node_modules/purecss/build/pure-min.css';

import Login from './containers/Login';
import Tests from './components/Tests';

let Page = Login;

const App = props => {
  return (
    <div className='pure-g'>
      <div className='pure-u-1'>
        <h1>EDENZ Colleges Placement Test</h1>
      </div>

      <div className='pure-u'>
        <Page />
      </div>

    </div>
  );
}

export default App;