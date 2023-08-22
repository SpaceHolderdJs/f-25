import React from "react";
import { useFetchData } from "../../hooks/useFetchData";
import { DashboardUserInterface } from "./types";
import { FlexColumn } from "../shared/Flex";
import { UserItem } from "./UserItem";

export const UsersList = () => {
  const { data, isLoading } = useFetchData<DashboardUserInterface[]>(
    "https://jsonplaceholder.typicode.com/users",
    { method: "GET" }
  );

  console.log(data, isLoading);

  return (
    <FlexColumn width="100%" alignItems="center">
      <h1>Users</h1>
      {data?.map((user) => (
        <UserItem user={user} />
      ))}
    </FlexColumn>
  );
};
