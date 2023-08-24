import React, { FC } from "react";
import { DashboardUserInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { ContentWrapper } from "../shared/Common";

interface PropsInterface {
  user: DashboardUserInterface;
}

export const UserItem: FC<PropsInterface> = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <ContentWrapper alignItems="center">
      <FlexColumn>
        <h5 style={{ fontSize: "20px" }}>{name}</h5>
        <p>{email}</p>
      </FlexColumn>
      <span>{phone}</span>
    </ContentWrapper>
  );
};
