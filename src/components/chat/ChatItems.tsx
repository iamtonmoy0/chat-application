import { useSelector } from "react-redux";
import { useGetConversationsQuery } from "../../features/conversation/conversationApi";
import ChatItem from "./ChatItem";
import RootState from "../../types/types";

export default function ChatItems() {
  const { user } = useSelector((state: RootState) => state.auth);
  const { email } = user;
  const {
    data: conversations,
    isLoading,
    isError,
  } = useGetConversationsQuery(email);
  let content = null;
  if (isLoading) {
    content = <p>loading ....</p>;
  } else if (!isLoading && isError) {
    content = <p>Error occured</p>;
  } else {
    content = conversations?.map((conv) => (
      <li key={conv.id}>
        <ChatItem
          avatar="https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg"
          name="Saad Hasan"
          lastMessage="bye"
          lastTime="25 minutes"
        />
      </li>
    ));
  }
  return <ul>{content}</ul>;
}
