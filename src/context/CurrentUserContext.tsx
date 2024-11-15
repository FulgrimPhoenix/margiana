import { createContext } from "react";
import { IAdminProfileData } from "../types";
import { constants } from "../utils/constants";

export const CurrentUserContext = createContext<IAdminProfileData>(
  constants.defaultAdminProfileData
);
