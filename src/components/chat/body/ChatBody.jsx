// import Blank from "./Blank";
import { useParams } from "react-router-dom";
import ChatHead from "./ChatHead";
import Messages from "./Messages";
import Options from "./Options";
import { useGetMessagesQuery } from "../../../features/messages/messagesApi";
import Error from "../../ui/Error";

export default function ChatBody() {
  const { id } = useParams();
  // console.log(id);

  const { data, isLoading, isError, error } = useGetMessagesQuery(id);
  // console.log(data, isLoading, isError, error);

  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = (
      <div>
        <Error message="no message found" />
      </div>
    );
  } else if (!isLoading && !isError && data.data?.length === 0) {
    content = <div>No messages found!</div>;
  } else if (!isLoading && !isError && data.data?.length > 0) {
    content = (
      <>
        <ChatHead message={data.data[0]} />
        <Messages messages={data.data} />
        <Options conversationId={id} receiverId={data?.data[0]?.receiver._id} />
      </>
    );
  }

  return (
    <div className="w-full lg:col-span-2 lg:block">
      <div className="w-full grid conversation-row-grid">{content}</div>
    </div>
  );
}
