import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/custom-styles.css';
import React from "react";
import ReactDOM from "react-dom";
import NextApp from './NextApp';
import registerServiceWorker from './registerServiceWorker';

// Add this import:
import {AppContainer} from 'react-hot-loader';

import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser' // or whatever Joi library you are using
 
ReactJoiValidations.setJoi(Joi);

// Wrap the rendering in a function:
const render = Component => {
  ReactDOM.render(
    // Wrap App inside AppContainer
    <AppContainer>
      <NextApp/>
    </AppContainer>,
    document.getElementById('root')
  );
};

// Do this once
registerServiceWorker();

// Render once
render(NextApp);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./NextApp', () => {
    render(NextApp);
  });
}
