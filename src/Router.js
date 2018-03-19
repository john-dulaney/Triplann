import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./Common/NotFound";
import LoginForm from './Common/LoginForm';
import Dashboard from './Home/Dashboard';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginForm} />
      <Route path="/dashboard/:userId" component={Dashboard} />
      <Route path="/checlist/:userId" component={App} />
      <Route path="/home/:userId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
// const routes = {
//   // base component (wrapper for the whole application).
//   component: Base,
//   childRoutes: [

//     {
//       path: '/',
//       component: HomePage
//     },

//     {
//       path: '/login',
//       component: LoginPage
//     },

//     {
//       path: '/signup',
//       component: SignUpPage
//     }

//   ]
// };