import {
  SET_USER_FIRST_NAME,
  SET_USER_LAST_NAME,
  SET_USER_EMAIL,
  SET_USER_MESSAGE,
} from "./actions";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const reducer = (state = initialState, action) => {
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

export default reducer;
