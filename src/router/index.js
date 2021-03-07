import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Home = lazy(() => import("@pages/Home"));
const Login = lazy(() => import("@pages/Login"));
const SignUp = lazy(() => import("@pages/SignUp"));
const Success = lazy(() => import("@pages/Success"));
const ResetPassword = lazy(() => import("@pages/ResetPassword"));
const AddSubscription = lazy(() => import("@pages/AddSubscription"));
const Subscriptions = lazy(() => import("@pages/Subscriptions"));
const UpdateSubscription = lazy(() => import("@pages/UpdateSubscription"));
const SubscriptionInfo = lazy(() => import("@pages/SubscriptionInfo"));
const Profile = lazy(() => import("@pages/Profile"));
const Overview = lazy(() => import("@pages/Overview"));

export function RouterView() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/success" component={Success} />
          <Route exact path="/reset-password" component={ResetPassword} />
          <Route exact path="/add-subscription" component={AddSubscription} />
          <Route exact path="/subscriptions" component={Subscriptions} />
          <Route
            exact
            path="/edit-subscription"
            component={UpdateSubscription}
          />
          <Route exact path="/subscription-info" component={SubscriptionInfo} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/overview" component={Overview} />
        </Switch>
      </Suspense>
    </Router>
  );
}
