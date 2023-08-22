import React, { FC } from "react";
import { DashboardUserInterface } from "./types";
import { FlexColumn, FlexRow } from "../shared/Flex";

interface PropsInterface {
  user: DashboardUserInterface;
}

export const UserItem: FC<PropsInterface> = ({ user }) => {
  const { name, email, phone } = user;
  return (
    <FlexRow
      width="calc(90% - 20px)"
      background="lightgrey"
      padding="10px"
      margin="5px"
      alignItems="center"
      justifyContent="space-between"
    >
      <FlexColumn>
        <h5 style={{ fontSize: "20px" }}>{name}</h5>
        <p>{email}</p>
      </FlexColumn>
      <span>{phone}</span>
    </FlexRow>
  );
};
