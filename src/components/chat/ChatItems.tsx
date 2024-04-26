import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversation/conversationApi";
import ChatItem from "./ChatItem";
import RootState from "../../types/types";
import getParticipant from "../../utils/getParticipants";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";

export default function ChatItems() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { email } = user;
  const {
    data: conversations,
    isLoading,
    isError,
  } = useGetConversationsQuery(email);
  console.log(conversations);
  let content = null;
  if (isLoading) {
    content = <p>loading ....</p>;
  } else if (!isLoading && isError) {
    content = <p>Error occured</p>;
  } else {
    content = conversations?.map((conv) => {
      const data = getParticipant(conv.users, email);
      return (
        <li key={conv._id}>
          <Link to={`/chat/${conv._id}`}>
            <ChatItem
              avatar={gravatarUrl(data.email, { size: 80 })}
              name={data.name}
              lastMessage="bye"
              lastTime="25 minutes"
            />
          </Link>
        </li>
      );
    });
  }
  return <ul>{content}</ul>;
}
