import axios from "axios";
import { REGISTER_USER, LOAD_USER, FAIL_USER, LOGIN_USER, LOGOUT_USER, CURRENT_USER } from "../actiontypes/ActionTypes";


// Register user
export const signup = (newUser) => async (dispatch) => {
dispatch({ type: LOAD_USER });
try {
let result = await axios.post("https://e-drive.onrender.com/api/users/signup", newUser);
dispatch({ type: REGISTER_USER, payload: result.data });
} catch (error) {
dispatch({ type: FAIL_USER, payload: error.response });
}
};

// Login user
export const login = (user) => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
    let result = await axios.post("https://e-drive.onrender.com/api/users/login", user);
    dispatch({ type: LOGIN_USER, payload: result.data });
    } catch (error) {
    dispatch({ type: FAIL_USER, payload: error.response });
    }
};

// Current user
export const current = () => async (dispatch) => {
    dispatch({ type: LOAD_USER });
    try {
    const config = {
    headers: {Authorization: localStorage.getItem("token")}};
    let result = await axios.get("https://e-drive.onrender.com/api/users/current", config);
    dispatch({type: CURRENT_USER, payload: result.data,});
    } catch (error) {
    dispatch({type: FAIL_USER, payload: error.response});
    }
    };

// Log out user
export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT_USER });
}
