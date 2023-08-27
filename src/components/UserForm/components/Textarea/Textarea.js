import React from "react";
import PropTypes from "prop-types";

import "./Textarea.css";

const Textarea = ({ name, label, onChange, error, value }) => {
  return (
    <div className="textarea-field">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} onChange={onChange} value={value} />
      {!!error && <p>{error}</p>}
    </div>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  value: PropTypes.string,
};

export default Textarea;
