import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../features/users/usersApi";
import Error from "../ui/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  conversationApi,
  useAddConversationMutation,
  useEditConversationMutation,
} from "../../features/conversations/conversationsApi";
import {
  useAddMessagesMutation,
  useEditMessagesMutation,
} from "../../features/messages/messagesApi";

export default function Modal({ open, control }) {
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [request, setRequest] = useState(false);
  const [conversation, setConversation] = useState(undefined);
  const [responseError, setResponseError] = useState("");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { email: myEmail } = user || {};
  const { data, isLoading, isError } = useGetUserQuery(to, { skip: !request });
  // console.log(data.data);

  const [addConversation, {}] = useAddConversationMutation();
  const [addMessages, {}] = useAddMessagesMutation();

  useEffect(() => {
    if (data?.data?.email && data?.data?.email !== myEmail) {
      dispatch(
        conversationApi.endpoints.getSingleConversation.initiate({
          userEmail: myEmail,
          participantEmail: to,
        })
      )
        .unwrap()
        .then((data) => {
          console.log(data.data);
          setConversation(data?.data);
          console.log(conversation[0]);
        })
        .catch((err) => {
          setResponseError("There was a problem!");
        });
    }
  }, [data]);
  // debounce
  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  // search

  const search = (value) => {
    if (value) {
      setTo(value);
      setRequest(true);
    }
  };
  // handle search

  const handleSearch = debounceHandler(search, 1000);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (conversation && conversation.length > 0) {
      const receiverData = conversation[0].users.filter(
        (u) => u._id !== user.id
      );
      addMessages({
        conversationId: conversation[0]._id,
        sender: user.id,
        receiver: receiverData[0]._id,
        message,
      });
      // TODO: need to close the modal and redirect to the chat page
    } else {
      // addConversation();
      console.log("error");
    }
  };
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Send message
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
            action="#"
            method="POST"
          >
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="to" className="sr-only">
                  To
                </label>
                <input
                  id="to"
                  name="to"
                  type="email"
                  required
                  onChange={(e) => handleSearch(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Enter Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Message"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              >
                Send Message
              </button>
            </div>

            {isError ? <Error message="No user found" /> : <></>}
            {data?.data?.email === myEmail ? (
              <Error message="You can not send message to your self" />
            ) : (
              <></>
            )}
            {responseError && <Error message={responseError} />}
          </form>
        </div>
      </>
    )
  );
}
