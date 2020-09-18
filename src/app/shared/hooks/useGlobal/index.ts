import { useContext } from "react";

import { GlobalContext } from "app/shared/providers";

export default function () {
  const { getGlobal, setGlobal } = useContext(GlobalContext);

  return {
    get: getGlobal,
    set: setGlobal,
  };
}
