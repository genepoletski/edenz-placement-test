import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe.skip('starting the app', () => {
  it('should render without crashing', () => {
    const app = renderer.create(<App/>);
  });
});