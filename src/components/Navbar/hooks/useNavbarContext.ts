import React from "react";
import { NavbarContext } from "../context";
import { NavbarContextInterface } from "../types";

export const useNavbarContext = (): NavbarContextInterface => {
  const context = React.useContext(NavbarContext);
  if (!context) {
    throw new Error('This component must be used within a <Navbar> component.');
  }
  return context;
};
