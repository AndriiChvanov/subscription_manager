import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));
const Success = lazy(() => import("@pages/Success"));
const ResetPassword = lazy(() => import("@pages/ResetPassword"));
const AddSubscriptions = lazy(() => import("@pages/AddSubscriptions"));
const Subscriptions = lazy(() => import("@pages/Subscriptions"));
const UpdateSubscriptions = lazy(() => import("@pages/UpdateSubscriptions"));
const SubscriptionInfo = lazy(() => import("@pages/SubscriptionInfo"));

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
					<Route exact path='/add-subscriptions' component={AddSubscriptions} />
					<Route exact path='/subscriptions' component={Subscriptions} />
					<Route
						exact
						path='/upd-subscriptions'
						component={UpdateSubscriptions}
					/>
					<Route exact path='/subscription-info' component={SubscriptionInfo} />
				</Switch>
			</Suspense>
		</Router>
	);
}
