import React from "react";
import SearchBox from "./searchBox";

const SearchForm = ({ label, placeholder }) => {
  const [query, setQuery] = React.useState("");

  const validate = () => (query ? 0 : 1);

  const handleQuerySubmit = (e) => {
    e.preventDefault();
  };

  const handleQueryChange = (query) => setQuery(query);

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
