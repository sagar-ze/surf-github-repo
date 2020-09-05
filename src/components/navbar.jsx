import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./common/searchForm";

const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" className="navbar-brand font-weight-bold">
        Github
      </Link>
      <div className="mr-5">
        <SearchForm label="Submit" placeholder="Find a Repo" />
      </div>
    </nav>
  );
};

export default Navbar;
