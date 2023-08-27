import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "./UserForm.css";

import InputField from "./components/InputField";
import Textarea from "./components/Textarea";
import { InitialValues, validate } from "./formLogic";
import {
  setUserFirstName,
  setUserLastName,
  setUserEmail,
  setUserMessage,
} from "../../store";

const UserForm = () => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(InitialValues);

  const [formErrors, setFormErrors] = useState(null);

  const handleInputChange = (name, value) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSubmit = () => {
    const { firstName, lastName, email, message } = formValues;
    const errors = validate(formValues);
    const isValid = Object.keys(errors).length === 0;

    if (isValid) {
      dispatch(setUserFirstName(firstName));
      dispatch(setUserLastName(lastName));
      dispatch(setUserEmail(email));
      dispatch(setUserMessage(message));
      setFormErrors(null);
      setFormValues(InitialValues);
      alert(
        `Submitted succesfully. First name: ${firstName}, Last name: ${lastName}, Email: ${email}, Message: ${message}`
      );
    } else {
      setFormErrors(errors);
    }
  };
  return (
    <div className="user-form__container">
      <InputField
        type="text"
        name="firstName"
        label="First Name"
        value={formValues.firstName}
        onChange={(e) => handleInputChange("firstName", e.target.value)}
        error={formErrors?.firstName}
      />
      <InputField
        type="text"
        name="lastName"
        label="Last Name"
        value={formValues.lastName}
        onChange={(e) => handleInputChange("lastName", e.target.value)}
        error={formErrors?.lastName}
      />
      <InputField
        type="email"
        name="email"
        label="Email"
        value={formValues.email}
        onChange={(e) => handleInputChange("email", e.target.value)}
        error={formErrors?.email}
      />
      <Textarea
        name="message"
        label="Message"
        value={formValues.message}
        onChange={(e) => handleInputChange("message", e.target.value)}
        error={formErrors?.message}
      />
      <div className="user-form__actions">
        <button className="user-form__submit" onClick={onSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default UserForm;
