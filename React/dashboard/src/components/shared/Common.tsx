import { styled } from "styled-components";
import { Flex } from "./Flex";

export const ContentWrapper = styled(Flex)`
  width: calc(90% - 20px);
  background: lightgrey;
  padding: 10px;
  margin: 5px;
  justify-content: space-between;
`;
