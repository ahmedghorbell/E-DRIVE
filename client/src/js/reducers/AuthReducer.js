import {
  REGISTER_USER,
  LOGIN_USER,
  CURRENT_USER,
  LOGOUT_USER,
  LOAD_USER,
  FAIL_USER,
} from "../actiontypes/ActionTypes";

// InitialState
const initialState = {
  listUsers: [],
  loadUser: false,
  errors: null,
  isAuth: false,
  isAdmin: false,
  superAdmin: false,
};

// Pure function
const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_USER:
      return { ...state, loadUser: true };
    case REGISTER_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        listUsers: payload.newUser,
        loadUser: false,
        isAuth: true,
        isAdmin: payload.newUser.isAdmin,
        superAdmin: payload.newUser.superAdmin,
      };
    case LOGIN_USER:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        listUsers: payload.foundUser,
        loadUser: false,
        isAuth: true,
        isAdmin: payload.foundUser.isAdmin,
        superAdmin: payload.foundUser.superAdmin,
      };
    case CURRENT_USER:
      return {
        ...state,
        listUsers: payload,
        loadUser: false,
        isAuth: true,
        isAdmin: payload.isAdmin,
        superAdmin: payload.superAdmin,
      };
    case LOGOUT_USER:
      localStorage.removeItem("token");
      return {
        ...state,
        listUsers: null,
        loadUser: false,
        isAuth: false,
        isAdmin: false,
        superAdmin: false,
      };
    case FAIL_USER:
      return { ...state, errors: payload, loadUser: false };

    default:
      return state;
  }
};
export default AuthReducer;
