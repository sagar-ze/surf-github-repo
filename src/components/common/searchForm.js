import React from "react";
import { useLocation } from "react-router-dom";
import SearchBox from "./searchBox";
import { getQueryParams } from "../../utils/searchQuery";
import { repoSearch } from "../../config/pathname";

const SearchForm = ({ label, placeholder, onSearch }) => {
  const location = useLocation();
  const [query, setQuery] = React.useState("");

  React.useEffect(() => {
    if (location.pathname === repoSearch.path) {
      const { q } = getQueryParams(location);
      setQuery(q);
    }
  }, [location]);

  const handleQueryChange = (value) => setQuery(value);

  const validate = () => (query ? 0 : 1);

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="form-inline" onSubmit={handleQuerySubmit}>
      <SearchBox
        value={query}
        onChange={handleQueryChange}
        placeholder={placeholder}
      />
      <button
        disabled={validate()}
        className="btn btn-primary  my-2 my-sm-0"
        type="submit"
      >
        {label}
      </button>
    </form>
  );
};

export default SearchForm;
