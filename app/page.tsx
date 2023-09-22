import About from "./components/about";
import Footer from "./components/footer";
import Header from "./components/header";
import HomeContent from "./components/homeContent";
import Projects from "./components/projects";
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
        <Projects />
        <Footer />
      </div>
      <ScrollButton />
    </main>
  );
}
