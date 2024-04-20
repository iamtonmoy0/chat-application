import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import conversationReducer from "../features/conversation/conversationSlice";
import messagesReducer from "../features/ messages/messagesSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    conversation: conversationReducer,
    messages: messagesReducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
  devTools: import.meta.env.VITE_ENV !== "production",
});

export default store;
