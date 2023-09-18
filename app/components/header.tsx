"use client";

import { Transition } from "@headlessui/react";

export default function Header() {
  return (
    <div className="flex items-center justify-center m-3">
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
        <span className="font-bold text-3xl text-neutral-50 left-0.5">泉</span>
      </Transition>
    </div>
  );
}
