import React from "react";

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

export default Select;
