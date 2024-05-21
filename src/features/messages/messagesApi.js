import { apiSlice } from "../api/apiSlice";

const messageApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getMessages: builders.query({
      query: (id) => {
        return `/messages?conversationId=${id}&limit=5`;
      },
    }),
    addMessages: builders.mutation({
      query: (data) => ({
        url: "/messages",
        method: "POST",
        body: data,
      }),
    }),
    editMessages: builders.mutation({
      query: (id, data) => ({
        url: "/messages",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useGetMessagesQuery,
  useAddMessagesMutation,
  useEditMessagesMutation,
} = messageApi;
