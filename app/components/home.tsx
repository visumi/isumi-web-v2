import Image from "next/image";

export default function HomeContent() {
  return (
    <div className="relative text-center">
      <h2 className="text-4xl font-bold tracking-wide shadow-lg text-neutral-50">
        Vinícius Isumi
      </h2>
      <h3 className="text-xl font-medium shadow-md text-emerald-500">
        Engenheiro Front-end
      </h3>
      <h4 className="shadow-sm text-md text-neutral-300">
        Entusiasta em criar aplicações que mudam visões
      </h4>
      <Image
        className="absolute -top-3"
        src="/textBG.svg"
        width={500}
        height={1000}
        alt="Image from background"
      />
    </div>
  );
}
