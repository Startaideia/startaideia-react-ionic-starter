import React, { useCallback, useState } from "react";
import get from "lodash/get";
import set from "lodash/set";

const GlobalContext = React.createContext<any>({});

function GlobalProvider({ children }) {
  const [globalState, setGlobalState] = useState<any>({});

  /**
   * Get a global value
   *
   */
  const getGlobal = useCallback(
    function (key: string, defaultValue: any = null) {
      return get({ ...globalState }, key, defaultValue);
    },
    [globalState]
  );

  /**
   * Set a global value
   *
   */
  const setGlobal = useCallback(
    function (key: string, value: any = null) {
      return setGlobalState(function (previousState) {
        return set({ ...previousState }, key, value);
      });
    },
    [setGlobalState]
  );

  return (
    <GlobalContext.Provider value={{ getGlobal, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
export { GlobalContext };
