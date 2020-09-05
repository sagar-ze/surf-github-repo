import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { getRepositories } from "./services/searchService";
import * as path from "./config/path";
import Navbar from "./components/navbar";

import "./App.css";

const HomePage = lazy(() => import("./components/homePage"));
const NotFound = lazy(() => import("./components/notFound"));

function App() {
  const handleSearch = async (query) => {
    const { data } = await getRepositories(query);
    console.log("D is", data);
  };
  return (
    <>
      <Navbar onSearch={handleSearch} />
      <Suspense fallback={<p className="align-middle">Loading....</p>}>
        <Switch>
          <Route exact path={path.mountPoint} component={HomePage} />
          <Route to={path.notFound} component={NotFound} />
          <Redirect to={path.notFound} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
