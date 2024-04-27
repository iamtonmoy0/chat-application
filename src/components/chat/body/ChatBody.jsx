// import Blank from "./Blank";
import { useParams } from "react-router-dom";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";

export default function ChatBody() {
  const { id } = useParams();
  console.log(id);

  const { data, isLoading, isError } = useGetMessagesQuery(id);
  let content = null;
  // api request goes here
  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">
        <ChatHead
          avatar="https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383__340.jpg"
          name="Tonmoy Islam"
        />
        <Messages />
        <Options />
        {/* <Blank /> */}
      </div>
    </div>
  );
}
