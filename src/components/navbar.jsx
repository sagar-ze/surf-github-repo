import React from "react";
import { Link, useHistory } from "react-router-dom";
import SearchForm from "./common/searchForm";
import { mountPoint, repoSearch } from "../config/pathname";

const Navbar = () => {
  const history = useHistory();

  const handleSearch = async (query) => {
    history.push(repoSearch.param(query, 1, 25, "", ""));
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <Link to={mountPoint} className="navbar-brand font-weight-bold">
        Github
      </Link>
      <SearchForm
        label="Submit"
        onSearch={handleSearch}
        placeholder="Find a Repo"
      />
    </nav>
  );
};

export default Navbar;
