import { APP_CHANGE_NAME } from "./app.types";

const INITIAL_STATE = {
  appName: "Startaideia Ionic Starter",
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case APP_CHANGE_NAME:
      return { ...state, appName: action.payload };
  }
  return { ...state };
}
