import About from "./components/about";
import Header from "./components/header";
import HomeContent from "./components/homeContent";
import ScrollButton from "./components/scrollButton";
import Timeline from "./components/timeline";

export default function Home() {
  return (
    <main className="bg-[url('/waves.svg')] bg-no-repeat bg-cover relative">
      <Header />
      <div className="flex flex-col gap-14 mt-8">
        <HomeContent />
        <About />
        <Timeline />
      </div>
      <ScrollButton />
    </main>
  );
}
