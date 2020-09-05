import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
const HomePage = lazy(() => import("./components/homePage"));
const NotFound = lazy(() => import("./components/notFound"));
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p className="align-middle">Loading....</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route to="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
