import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom';

import {App, Login} from './containers';
import {Dashboard} from './containers';
// import {Counter} from './containers';
// import { requireAuth, checkAuth } from './util';


const Routers = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/dashboard" component={Dashboard} />
		</Switch>
	</BrowserRouter>
);

export { Routers };