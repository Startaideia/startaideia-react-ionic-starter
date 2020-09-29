import { APP_CHANGE_NAME } from "./app.types";

export function changeAppName(appName: string) {
  return {
    type: APP_CHANGE_NAME,
    payload: appName,
  };
}

export default {
  changeAppName,
};
