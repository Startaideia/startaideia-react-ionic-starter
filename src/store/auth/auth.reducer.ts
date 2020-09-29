import { LOADING, LOGIN, FAILED, SIGNUP } from "./auth.types";

const INITIAL_STATE = {
  user: null,
  error: null,
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return { ...state, user: payload, loading: false, error: null };
    case SIGNUP:
      return { ...state, user: payload, loading: false, error: null };
    case FAILED:
      return { ...state, user: null, loading: false, error: payload };
    case LOADING:
      return { ...state, loading: payload };
  }
  return { ...state };
}
