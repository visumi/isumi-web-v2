"use client";

import Header from "./components/header";
import HomeContent from "./components/homeContent";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <main className="bg-[url('/waves.svg')] bg-no-repeat bg-cover relative">
        <Header />
        <div className="flex flex-col gap-16 mt-16">
          <HomeContent />
          <Timeline />
        </div>
    </main>
  );
}
