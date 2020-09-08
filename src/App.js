import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import * as pathname from "./config/pathname";
import Navbar from "./components/navbar";

import "./scss/style.scss";
import "./App.css";

const HomePage = lazy(() => import("./components/homePage"));
const NotFound = lazy(() => import("./components/notFound"));
const SearchResult = lazy(() => import("./components/searchResult"));
const RepoDetail = lazy(() => import("./components/repoDetail"));

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={6000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
      />
      <Navbar />
      <main className="main-container">
        <Suspense fallback={<p className="align-middle">Loading....</p>}>
          <Switch>
            <Route exact path={pathname.mountPoint} component={HomePage} />
            <Route path={pathname.repoSearch.path} component={SearchResult} />
            <Route path={pathname.repoDetail.path} component={RepoDetail} />
            <Route to={pathname.notFound} component={NotFound} />
            <Redirect to={pathname.notFound} />
          </Switch>
        </Suspense>
      </main>
    </>
  );
}

export default App;
