import { CodeBracketIcon } from "@heroicons/react/24/solid";
import TimelineCard from "./timelineCard";

export default function Timeline() {
  return (
    <div>
      <div className="h-[1px] bg-emerald-500"></div>
      <div className="relative p-4 overflow-hidden text-center bg-neutral-900">
        <h2 className="relative z-10 text-lg font-bold tracking-widest text-neutral-200">
          CARREIRA
        </h2>
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <CodeBracketIcon className="absolute w-44 h-44 text-neutral-800" />
        </div>
      </div>
      <TimelineCard title="Picpay" bgColor="bg-[#00cc73]" />
      <TimelineCard title="Banco Original" bgColor="bg-[#08AB5C]" />
      <TimelineCard title="Enforce" bgColor="bg-[#081E87]" />
      <TimelineCard title="LaRCom - Unicamp" bgColor="bg-neutral-50" />
    </div>
  );
}
