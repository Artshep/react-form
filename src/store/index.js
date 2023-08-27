import { createStore } from "redux";

// actions
const SET_USER_FIRST_NAME = "SET_USER_FIRST_NAME";
const SET_USER_LAST_NAME = "SET_USER_LAST_NAME";
const SET_USER_EMAIL = "SET_USER_EMAIL";
const SET_USER_MESSAGE = "SET_USER_MESSAGE";

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

// reducer
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case SET_USER_LAST_NAME:
      return { ...state, lastName: action.payload };
    case SET_USER_EMAIL:
      return { ...state, email: action.payload };
    case SET_USER_MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

// store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
