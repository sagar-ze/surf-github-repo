import React from "react";
import { Link } from "react-router-dom";
import SearchForm from "./common/searchForm";
import { mountPoint } from "../config/pathname";

const Navbar = ({ onSearch }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to={mountPoint} className="navbar-brand font-weight-bold ml-5">
        Github
      </Link>
      <div className="mr-5">
        <SearchForm
          label="Submit"
          onSearch={onSearch}
          placeholder="Find a Repo"
        />
      </div>
    </nav>
  );
};

export default Navbar;
