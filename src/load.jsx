import { useEffect, useState } from "react";

export function Load() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); // Ajusta el tiempo a tu necesidad (1000 ms = 1 segundo)

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="m-0 p-0 h-screen flex justify-center items-center"></div>
  );
}
