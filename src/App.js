import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import "./App.css";
const HomePage = lazy(() => import("./components/homePage"));
function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p className="align-middle">Loading....</p>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
