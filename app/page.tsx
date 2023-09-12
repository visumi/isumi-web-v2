"use client";

import { useState } from "react";
import Header, { DropDownMenu } from "./components/header";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="h-screen bg-[url('/waves.svg')] bg-no-repeat bg-cover relative">
      <DropDownMenu menuChanged={() => setIsOpen(false)} isOpen={isOpen} />
      <div className={isOpen ? 'transition-opacity opacity-30' : 'transition-opacity opacity-100'}>
        <Header menuChanged={() => setIsOpen(!isOpen)} />
        <div className="m-2">CONTENT</div>
      </div>
    </main>
  );
}
