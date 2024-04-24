import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import RootState from "../../app/store"; // Adjust the path as needed

type Auth = {
  token: string | undefined;
};

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API,
    prepareHeaders: async (headers, { getState }) => {
      const auth: Auth = (getState() as RootState).auth; // Cast the state to RootState
      const token = auth?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
