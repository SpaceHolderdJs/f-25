import React from "react";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { StyledLink, StyledScrollLink } from "../shared/Link";
import { ScrollTopContextProvider, ScrollPoint } from "react-use-scroll-to";

export const Landing = () => {
  return (
    <ScrollTopContextProvider>
      <FlexColumn width="100%" alignItems="center">
        <FlexRow
          as="header"
          width="100%"
          background="grey"
          padding="10px"
          alignItems="center"
          className="landing-header"
        >
          <StyledLink to="/login">Login</StyledLink>

          <StyledScrollLink elementTag="section-1">Section 1</StyledScrollLink>

          <StyledScrollLink elementTag="section-2">Section 2</StyledScrollLink>

          <StyledScrollLink elementTag="section-3">Section 3</StyledScrollLink>
        </FlexRow>

        <ScrollPoint
          tag="section-1"
          style={{ width: "100%" }}
          className="point"
        >
          <FlexColumn
            width="100%"
            height="100vh"
            background="black"
          ></FlexColumn>
        </ScrollPoint>

        <ScrollPoint tag="section-2" style={{ width: "100%" }}>
          <FlexColumn
            width="100%"
            height="100vh"
            background="yellow"
          ></FlexColumn>
        </ScrollPoint>

        <ScrollPoint tag="section-3" style={{ width: "100%" }}>
          <FlexColumn
            width="100%"
            height="100vh"
            background="blue"
          ></FlexColumn>
        </ScrollPoint>
      </FlexColumn>
    </ScrollTopContextProvider>
  );
};
