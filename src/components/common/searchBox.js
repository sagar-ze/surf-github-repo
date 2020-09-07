import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3 mr-md-2"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};
SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
