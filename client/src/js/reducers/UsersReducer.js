import {
  FAIL_USERS,
  LOAD_USERS,
  SUCCESS_USERS,
} from "../actiontypes/ActionTypes";

// InitialState
const initialState = {
  usersList: [],
  errors: null,
  load: false,
};

// Pure function
const UsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USERS:
      return { ...state, load: true };
    case SUCCESS_USERS:
      return { ...state, load: false, usersList: payload };
    case FAIL_USERS:
      return { ...state, errors: payload.errors, load: false };
    default:
      return state;
  }
};

export default UsersReducer;
