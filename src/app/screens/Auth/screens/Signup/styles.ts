import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
`;

export const Brand = styled.img`
  margin-left: calc(50% - 75px);
  margin-bottom: 50px;
  width: 150px;
`;

export const Link = styled(RouterLink)`
  text-align: center;
  padding-top: 30px;
  display: block;
`;
