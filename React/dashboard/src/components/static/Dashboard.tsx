import React, { useContext, useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { FlexColumn, FlexRow } from "../shared/Flex";
import { DashboardContext } from "../../contexts/DashboardContext";

export const Dashboard = () => {
  const { user } = useContext(DashboardContext)!;

  // if (!user) return <h1>Not authorized</h1>

  const dashboardLinks = [
    { link: "users", text: "Users" },
    { link: "settings", text: "Settings" },
  ];

  return (
    <FlexColumn width="100%">
      <FlexRow width="100%" background="grey" gap="10px" padding="10px">
        {dashboardLinks.map(({ link, text }) => (
          <Link style={{ fontSize: "30px" }} to={link}>
            {text}
          </Link>
        ))}
      </FlexRow>
      <h1>Dasboard, Hello {user?.email}</h1>
      <Outlet />
    </FlexColumn>
  );
};
