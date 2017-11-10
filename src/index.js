import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import {store} from './configs/store';
import { Routers } from './configs/routes';
import './index.css';

injectTapEventPlugin()

ReactDOM.render(
	<MuiThemeProvider>
		<Provider store={store}>
	  	<Routers />
	  </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
