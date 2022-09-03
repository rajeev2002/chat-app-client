import { styled } from "@mui/system";
import React from "react";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";

const MainContainer = styled("div")({
  position: "absolute",
  right: "0",
  top: "0",
  width: "calc(100% - 326px)",
  borderBottom: "1px solid black",
  height: "48px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#36393f",
  padding: "0 15px",
});

const AppBar = () => {
  return (
    <MainContainer>
      <ChosenOptionLabel />
      <DropdownMenu />
    </MainContainer>
  );
};

export default AppBar;
