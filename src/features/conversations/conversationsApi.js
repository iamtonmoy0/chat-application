import { apiSlice } from "../api/apiSlice";

export const conversationApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // get conversation
    getConversations: builder.query({
      query: (email) => `/conversations?email=${email}`,
    }),
    // single conversation
    getSingleConversation: builder.query({
      query: ({ userEmail, participantEmail }) =>
        `conversation?userEmail=${userEmail}&participantEmail=${participantEmail}`,
    }),
    // add conversation
    addConversation: builder.mutation({
      query: (data) => ({
        url: "/conversation",
        method: "POST",
        body: data,
      }),
    }),
    // edit conversation
    editConversation: builder.mutation({
      query: ({ id, data }) => ({
        url: `/conversations/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetConversationsQuery,
  useGetSingleConversationQuery,
  useAddConversationMutation,
  useEditConversationMutation,
} = conversationApi;
