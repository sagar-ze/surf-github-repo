import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import * as pathname from "./config/pathname";
import Navbar from "./components/navbar";

import "./App.css";

const HomePage = lazy(() => import("./components/homePage"));
const NotFound = lazy(() => import("./components/notFound"));
const SearchResult = lazy(() => import("./components/searchResult"));

function App() {
  return (
    <>
      <Navbar />
      <main className="mainContainer">
        <Suspense fallback={<p className="align-middle">Loading....</p>}>
          <Switch>
            <Route exact path={pathname.mountPoint} component={HomePage} />
            <Route path={pathname.repoSearch.path} component={SearchResult} />
            <Route to={pathname.notFound} component={NotFound} />
            <Redirect to={pathname.notFound} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
