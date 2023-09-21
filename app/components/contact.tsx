import { AtSymbolIcon } from "@heroicons/react/24/outline";

export default function Contact() {
  return (
    <div className="px-3">
      <div className="flex gap-1">
        <h2 className="pb-2 text-xl font-bold tracking-wider underline decoration-emerald-500 underline-offset-4">
          CONTATO
        </h2>
        <AtSymbolIcon className="w-7 h-7 text-emerald-500" />
      </div>
      <div className="flex flex-col gap-2">
        <ContactCard />
        <ContactCard />
        <ContactCard />
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <div className="flex">
      <div className="w-16 p-2 rounded-l bg-neutral-800">XD</div>
      <div className="w-full p-2 rounded-r bg-neutral-700">XD</div>
    </div>
  );
}
