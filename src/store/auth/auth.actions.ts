import { authService } from "services";
import { LOADING, LOGIN, SIGNUP, FAILED } from "./auth.types";

/**
 * Handle user login
 *
 */
export function login(loginData) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const payload = await authService.login(loginData);
      dispatch({
        type: LOGIN,
        payload,
      });
    } catch ({ response }) {
      dispatch({
        type: FAILED,
        payload: response.data.error,
      });
    }
  };
}

/**
 * Signup a user
 *
 */
export function signup(signupData) {
  return async function (dispatch) {
    try {
      dispatch({
        type: LOADING,
        payload: true,
      });
      const payload = await authService.signup(signupData);
      dispatch({
        type: SIGNUP,
        payload,
      });
    } catch ({ response }) {
      dispatch({
        type: FAILED,
        payload: response.data.error,
      });
    }
  };
}

export default {
  signup,
  login,
};
