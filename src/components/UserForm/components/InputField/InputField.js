import React from "react";
import PropTypes from "prop-types";

import "./InputField.css";

const InputField = ({ type, name, label, onChange, error, value }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        onChange={onChange}
        value={value}
      />
      {!!error && <p>{error}</p>}
    </div>
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default InputField;
