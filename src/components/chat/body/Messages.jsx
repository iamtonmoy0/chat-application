import { useSelector } from "react-redux";
import Message from "./Message";

export default function Messages({ messages }) {
  const { user } = useSelector((state) => state.auth);
  const { email } = user;
  return (
    <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
      {/* <ul className="space-y-2">
        <Message justify="start" message="Hjdjd" />
        <Message justify="start" message="How are you?" />
     
      </ul> */}
      {messages.map((m) => {
        const { message, _id, sender } = m;
        const justify = sender.email !== email ? "start" : "end";
        return <Message key={_id} justify={justify} message={message} />;
      })}
    </div>
  );
}
