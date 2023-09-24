"use client";

import { Transition } from "@headlessui/react";
import { DocumentArrowDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Header() {
  return (
    <Transition
      appear={true}
      show
      enter="transform transition duration-100"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="flex items-center justify-between m-3 md:mx-32">
        <span className="font-bold text-3xl text-neutral-50 left-0.5">泉</span>
        <div className="flex gap-1">
          <button className="m-2 hover:brightness-90">
            <DocumentArrowDownIcon className="w-5 h-5 text-neutral-50" />
          </button>
          <button className="m-2 hover:brightness-90">
            <Image src="/in.svg" width={22} height={22} alt="Linkedin logo" />
          </button>
          <button className="m-2 hover:brightness-90">
            <Image src="/git.svg" width={22} height={22} alt="Github logo" />
          </button>
        </div>
      </div>
    </Transition>
  );
}
