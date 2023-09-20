"use client";

import { ArrowSmallUpIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (
        window.scrollY + window.innerHeight >=
        document.body.scrollHeight - 32
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      className="fixed p-2 rounded-full shadow-lg bottom-4 right-4 bg-gradient-to-tr from-emerald-500 to-emerald-700"
      onClick={() => window.scrollTo(0, 0)}
    >
      <ArrowSmallUpIcon className="w-6 h-6 text-emerald-50" />
    </button>
  );
}
