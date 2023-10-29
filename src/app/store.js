import { configureStore } from "@reduxjs/toolkit";
import  gitUser  from "../features/gituserslice";

export const store = configureStore({
  reducer: {
    app:gitUser
  },
  
});
