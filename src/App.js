import React, { Suspense, lazy } from "react";
import { Switch, Route, useHistory, Redirect } from "react-router-dom";
import * as pathname from "./config/pathname";
import Navbar from "./components/navbar";

import "./App.css";

const HomePage = lazy(() => import("./components/homePage"));
const NotFound = lazy(() => import("./components/notFound"));
const SearchResult = lazy(() => import("./components/searchResult"));

function App() {
  const history = useHistory();
  const handleSearch = async (query) => {
    const page = 1;
    const per_page = 25;
    const sort = "";
    const order = "";
    history.push(pathname.repoSearch.param(query, page, per_page, sort, order));
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <main className="mainContainer">
        <Suspense fallback={<p className="align-middle">Loading....</p>}>
          <Switch>
            <Route exact path={pathname.mountPoint} component={HomePage} />
            <Route
              path={pathname.repoSearch.path}
              component={SearchResult}
            />
            <Route to={pathname.notFound} component={NotFound} />
            <Redirect to={pathname.notFound} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
