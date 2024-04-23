import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // register
    register: builder.mutation({
      query: (data) => ({
        url: "/user/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log(result);
          dispatch(userLoggedIn(result.data.data));
        } catch (error) {
          console.log("Failed to login");
        }
      },
    }),
    // login
    login: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted({ queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(userLoggedIn(result.data.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
