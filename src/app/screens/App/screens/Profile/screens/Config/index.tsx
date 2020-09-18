import React, { useEffect } from "react";

import { Placeholder, useGlobal } from "app/shared";

function Config() {
  const { set } = useGlobal();

  useEffect(
    function () {
      set("app.title", "Configurações");
    },
    [set]
  );

  return <Placeholder title="Configuração" />;
}

export default Config;
