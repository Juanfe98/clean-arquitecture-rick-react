import { createContext } from "react";
import { NavbarContextInterface } from "../types";

export const NavbarContext = createContext<NavbarContextInterface | null>(null);
