import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';

render(<App apiRoot='http://koala.rails.dev:3000/api'/>, document.getElementById('root'));
