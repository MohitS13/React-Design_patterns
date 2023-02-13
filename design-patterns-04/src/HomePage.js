import useOnline from "./useOnline";
export default function HomePage() {
  const isOnline = useOnline();

  return isOnline ? "I am online" : "Not Online";
}
