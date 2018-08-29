import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import { injectGlobal } from 'styled-components';

import RobotoRegular from './assets/fonts/Roboto-Regular.ttf';
import RobotoBold from './assets/fonts/Roboto-Regular.ttf';

injectGlobal`
  @font-face {
    font-family: RobotoRegular;
    src: url(${RobotoRegular})  format('truetype');
  }

  @font-face {
    font-family: RobotoBold;
    src: url(${RobotoBold})  format('truetype');
  }

  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'RobotoRegular', serif;
  }

  html,
  body,
  body > div {
    min-height: 100%;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
