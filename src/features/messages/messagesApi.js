import { apiSlice } from "../api/apiSlice";

const messageApi = apiSlice.injectEndpoints({
  endpoints: (builders) => ({
    getMessages: builders.query({
      query: (id) => {
        return `/messages?conversationId=${id}&limit=5`;
      },
    }),
  }),
});

export const { useGetMessagesQuery } = messageApi;
