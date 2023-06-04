import axios from "axios";
import { FAIL_USERS, LOAD_USERS, SUCCESS_USERS } from "../actiontypes/ActionTypes";



// Get all users
export const getUsers = () => async (dispatch) => {
    dispatch({ type: LOAD_USERS });
    try {
      let users = await axios.get("/api/users/all_users");
      dispatch({type: SUCCESS_USERS, payload: users.data });
    } catch (error) {
      dispatch({ type: FAIL_USERS, payload: error.response });
    }
  };

// Get user by id
export const getUserById = (_id) => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    let user = await axios.get(`/api/users/get_user/${_id}`);
    dispatch({type: SUCCESS_USERS,  payload: user.data });
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};


// Update user
export const updateUser = (_id, newUser) => async (dispatch) => {
  dispatch({ type: LOAD_USERS });
  try {
    await axios.put(`/api/users/update_user/${_id}`, newUser);
    dispatch(getUserById(_id));
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

// Delete user
export const deleteUser = (_id) => async (dispatch) => {
  try {
    await axios.delete(`/api/users/delete_user/${_id}`);
  } catch (error) {
    dispatch({ type: FAIL_USERS, payload: error.response });
  }
};

