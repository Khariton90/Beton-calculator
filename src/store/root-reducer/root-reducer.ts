import { createReducer } from "@reduxjs/toolkit";
import { AuthorizationStatus } from "../../constants";
import { changeAuthStatus } from "../action";

type RootState = {
  authorizationStatus: AuthorizationStatus
}

const initialState: RootState = {
  authorizationStatus: AuthorizationStatus.Unknown
}

const rootReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeAuthStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  })
})

export { rootReducer };