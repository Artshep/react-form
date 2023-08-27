export const SET_USER_FIRST_NAME = "SET_USER_FIRST_NAME";
export const SET_USER_LAST_NAME = "SET_USER_LAST_NAME";
export const SET_USER_EMAIL = "SET_USER_EMAIL";
export const SET_USER_MESSAGE = "SET_USER_MESSAGE";

export const setUserFirstName = (firstName) => ({
  type: SET_USER_FIRST_NAME,
  payload: firstName,
});

export const setUserLastName = (lastName) => ({
  type: SET_USER_LAST_NAME,
  payload: lastName,
});

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const setUserMessage = (message) => ({
  type: SET_USER_MESSAGE,
  payload: message,
});
