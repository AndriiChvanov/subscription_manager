import React, { lazy, Suspense  } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const Home = lazy(() => import('@pages/Home'));
const GuideLine = lazy(() => import('@pages/GuideLine'));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));



export function RouterView() {
    return (
			<Router>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/guideline' component={GuideLine} />
						<Route exact path='/login' component={Login} />
						<Route exact path='/signup' component={SignUp} />
					</Switch>
				</Suspense>
			</Router>
		);
}