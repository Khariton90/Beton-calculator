import { createAction } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../constants";

export const changeAuthStatus = createAction('root/changeAuthStatus', (value: AuthorizationStatus) => ({
  payload: value
}))