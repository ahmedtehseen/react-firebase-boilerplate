import React from 'react';
import {
	BrowserRouter,
	Route,
	Switch,
} from 'react-router-dom';

import { Login, Dashboard } from '../modules';

const Routers = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Login} />
			<Route path="/dashboard" component={Dashboard} />
		</Switch>
	</BrowserRouter>
);

export { Routers };