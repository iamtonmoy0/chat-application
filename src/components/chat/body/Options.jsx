import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useAddMessagesMutation,
  useGetMessagesQuery,
} from "../../../features/messages/messagesApi";

export default function Options({ conversationId, receiverId }) {
  const [message, setMessage] = useState("");
  const [shouldRefetch, setShouldRefetch] = useState(false);

  // state of user
  const { user } = useSelector((state) => state.auth);
  // message query
  const [addMessages, { isSuccess }] = useAddMessagesMutation();
  
  // Conditionally trigger the query based on shouldRefetch state
  const { data, refetch } = useGetMessagesQuery(conversationId, {
    skip: !shouldRefetch,
  });

  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      conversationId,
      sender: user.id,
      receiver: receiverId,
      message,
    };
    addMessages(data);
  };

  useEffect(() => {
    if (isSuccess) {
      setMessage("");
      setShouldRefetch(true);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (shouldRefetch) {
      refetch();
      setShouldRefetch(false);
    }
  }, [shouldRefetch, refetch]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between w-full p-3 border-t border-gray-300"
    >
      <input
        type="text"
        placeholder="Message"
        className="block w-full py-2 pl-4 mx-3 bg-gray-100 focus:ring focus:ring-blue-400 rounded-full outline-none focus:text-gray-700"
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <button type="submit">
        <svg
          className="w-5 h-5 text-gray-500 origin-center transform rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
        </svg>
      </button>
    </form>
  );
}
