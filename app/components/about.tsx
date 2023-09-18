"use client";

import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function About() {
  return (
    <div className="px-3">
      <div className="flex gap-1">
        <h2 className="pb-2 text-xl font-bold tracking-wider underline decoration-emerald-500 underline-offset-4">
          SOBRE MIM
        </h2>
        <UserCircleIcon className="w-7 h-7 text-emerald-500" />
      </div>
      <div className="bg-neutral-800 p-1 rounded">
        <p className="text-xs text-neutral-200 break-words">
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
        </p>
      </div>
    </div>
  );
}
