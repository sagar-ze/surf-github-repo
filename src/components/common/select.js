import React from "react";
import PropTypes from "prop-types";

const Select = ({ name, options, ...rest }) => {
  return (
    <div className="form-group">
      <select name={name} id={name} {...rest} className="form-control ">
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
Select.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
};
export default Select;
