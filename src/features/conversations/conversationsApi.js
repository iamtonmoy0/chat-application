import { apiSlice } from "../api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getConversations: builder.query({
      query: (email) => `/conversations?email=${email}`,
    }),
    getSingleConversation: builder.query({
      query: ({ userEmail, participantEmail }) =>
        `conversation?userEmail=${userEmail}&participantEmail=${participantEmail}`,
    }),
  }),
});
export const { useGetConversationsQuery, useGetSingleConversationQuery } =
  conversationApi;
