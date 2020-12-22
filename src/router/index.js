import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));
const Success = lazy(() => import("@pages/Success"));
const ResetPassword = lazy(() => import("@pages/ResetPassword"));
const AddSubcsriptions = lazy(() => import("@pages/AddSubcsriptions"));
const Subcsriptions = lazy(() => import("@pages/Subcsriptions"));

export function RouterView() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={SignUp} />
					<Route exact path='/success' component={Success} />
					<Route exact path='/resetpassword' component={ResetPassword} />
					<Route exact path='/addsubcsriptions' component={AddSubcsriptions} />
					<Route exact path='/subcsriptions' component={Subcsriptions} />
				</Switch>
			</Suspense>
		</Router>
	);
}
