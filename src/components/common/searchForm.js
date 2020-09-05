import React from "react";
import SearchBox from "./searchBox";

const SearchForm = ({ label, placeholder, onSearch }) => {
  const [query, setQuery] = React.useState("");

  const handleQueryChange = (value) => setQuery(value);

  const validate = () => (query ? 0 : 1);

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="form-inline" onSubmit={handleQuerySubmit}>
      <SearchBox value={query} onChange={handleQueryChange} placeholder={placeholder} />
      <button disabled={validate()} className="btn btn-primary  my-2 my-sm-0" type="submit">
        {label}
      </button>
    </form>
  );
};

export default SearchForm;
