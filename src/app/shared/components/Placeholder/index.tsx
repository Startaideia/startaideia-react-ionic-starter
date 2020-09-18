import React from "react";

import source from "assets/images/under_construction.png";
import { Container, Image } from "./styles";
import Text from "../Text";

function Placeholder({ title = "" }) {
  return (
    <Container>
      <Image src={source} />
      <Text value={title || "Em construção"} size={32} />
      <Text align="center">
        Em breve uma nova funcionalidade <br /> estará disponível aqui
      </Text>
    </Container>
  );
}

export default Placeholder;
