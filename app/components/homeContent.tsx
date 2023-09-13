export default function HomeContent() {
  return (
    <div className="relative flex flex-col justify-center h-40 text-center">
      <h2 className="text-4xl font-bold tracking-wide drop-shadow-lg text-neutral-50">
        Vinícius Isumi
      </h2>
      <h3 className="text-xl font-medium drop-shadow-md text-emerald-500">
        Engenheiro Front-end
      </h3>
      <h4 className="mx-2 text-md drop-shadow-sm text-neutral-300">
        Entusiasta em criar aplicações que mudam visões
      </h4>
      <div className="absolute h-48 w-full bg-[url('/textBg.svg')] bg-cover md:bg-repeat-x md:bg-contain"></div>
    </div>
  );
}
