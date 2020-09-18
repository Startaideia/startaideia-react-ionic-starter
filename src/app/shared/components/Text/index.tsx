import React from "react";
import { Container } from "./styles";

function Text({ value = "", children = undefined, ...props }: any) {
  return <Container {...props}>{value || children}</Container>;
}

export default Text;
