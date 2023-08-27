import validator from "validator";

export const validate = (values) => {
  const { firstName, lastName, email, message } = values;
  const errors = {};
  if (validator.isEmpty(firstName)) {
    errors.firstName = "First name is required";
  }

  if (validator.isEmpty(lastName)) {
    errors.lastName = "Last name is required";
  }

  if (!validator.isEmail(email)) {
    errors.email = "Email format is invalid";
  }

  if (message.length < 10) {
    errors.message = "Message should be at least 10 characters";
  }

  return errors;
};

export const InitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};
