import { configureStore } from "@reduxjs/toolkit";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { contactsReducer } from "./contactsSlice";

const enhancer = devToolsEnhancer();
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  enhancer,
});

export default store;
