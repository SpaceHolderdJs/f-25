import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { FlexColumn } from "./components/shared/Flex";
import { Auth } from "./components/static/Auth";

function App() {
  return (
    <FlexColumn
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center"
    >
     <Auth />
    </FlexColumn>
  );
}

export default App;
