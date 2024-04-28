import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversations/conversationsApi";
import ChatItem from "./ChatItem";
import getParticipant from "../../utils/getParticipants";
import gravatarUrl from "gravatar-url";
import { Link } from "react-router-dom";

export default function ChatItems() {
  const { user } = useSelector((state) => state.auth);
  const { email } = user || null;
  const {
    data: conversations,
    isLoading,
    isError,
  } = useGetConversationsQuery(email);
  // console.log(conversations);
  let content = null;
  if (isLoading) {
    content = <p>loading ....</p>;
  } else if (!isLoading && isError) {
    content = <p>No Chat List found</p>;
  } else {
    content = conversations?.map((conv) => {
      // console.log(conv._id);
      const data = getParticipant(conv.users, email);
      return (
        <li key={conv._id}>
          <Link to={`/inbox/${conv._id}`}>
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
