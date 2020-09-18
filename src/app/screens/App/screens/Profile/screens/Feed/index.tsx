import React, { useEffect } from "react";

import { Placeholder, useGlobal } from "app/shared";

function Feed() {
  const { set } = useGlobal();

  useEffect(
    function () {
      set("app.title", "Feed");
    },
    [set]
  );

  return <Placeholder title="Feed" />;
}

export default Feed;
