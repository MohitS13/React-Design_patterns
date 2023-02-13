import useOnline from "./useOnline";
export default function ChatPage() {
  const isOnline = useOnline();

  return isOnline ? "User available for chat" : "User not available for chat";
}