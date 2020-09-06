import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import SearchForm from "./common/searchForm";
import { mountPoint, repoSearch } from "../config/pathname";
import { getQueryParams } from "../utils/searchQuery";

const Navbar = () => {
  const history = useHistory();
  const location = useLocation();

  const handleSearch = async (query) => {
    const page = 1;
    const { per_page, sort, order } = getQueryParams(location);
    history.push(repoSearch.param(query, page, per_page, sort, order));
  };

  return (
    <nav className="navbar navbar-dark bg-dark fixed-top p-0 pl-md-4 pr-md-4">
      <Link
        to={mountPoint}
        className="navbar-brand d-none d-sm-block font-weight-bold"
      >
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
