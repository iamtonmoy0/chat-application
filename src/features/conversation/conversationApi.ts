import { apiSlice } from "../api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => `/conversations?email=${email}`,
    }),
  }),
});
export const { useGetConversationsQuery } = conversationApi;
