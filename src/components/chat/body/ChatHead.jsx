import gravatarUrl from "gravatar-url";
import { useSelector } from "react-redux";

export default function ChatHead({ message }) {
  const { sender, receiver } = message;
  const { user } = useSelector((state) => state.auth);
  const partnerData = sender.email === user.email ? receiver : sender;
  return (
    <div className="relative flex items-center p-3 border-b border-gray-300">
      <img
        className="object-cover w-10 h-10 rounded-full"
        src={gravatarUrl(partnerData.email, { size: 80 })}
        alt={partnerData.name}
      />
      <span className="block ml-2 font-bold text-gray-600">
        {partnerData.name}
      </span>
    </div>
  );
}
