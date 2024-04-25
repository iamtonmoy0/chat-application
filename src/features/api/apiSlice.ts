import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import RootState from "../../types/types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: async (headers, { getState }) => {
      const token: RootState = getState()?.auth?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
