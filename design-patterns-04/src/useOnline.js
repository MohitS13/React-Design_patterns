import { useEffect, useState } from "react";
export default function useOnline() {
  const [isOnline, setOnline] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOnline(true);
    }, 3000);
  }, []);
  return isOnline;
}
