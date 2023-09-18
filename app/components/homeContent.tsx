"use client";

import { Transition } from "@headlessui/react";
import Tag from "./tag";

export default function HomeContent() {
  return (
    <Transition
      appear={true}
      show
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="flex flex-col gap-12">
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
        <div className="flex flex-wrap justify-center gap-2">
          <Transition.Child
            enter={`transform transition duration-500 ease-in-out`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Tag title="Angular" color="bg-[#B52E31]" icon="angular.svg" />
          </Transition.Child>
          <Transition.Child
            enter={`transform transition duration-[600ms] ease-in-out`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Tag title="React" color="bg-[#61DBFB]" icon="react.svg" />
          </Transition.Child>
          <Transition.Child
            enter={`transform transition duration-700 ease-in-out`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Tag title="NextJS" color="bg-neutral-500" icon="nextjs.svg" />
          </Transition.Child>
          <Transition.Child
            enter={`transform transition duration-[800ms] ease-in-out`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Tag title="HTML" color="bg-[#E34C26]" icon="html.svg" />
          </Transition.Child>
          <Transition.Child
            enter={`transform transition duration-[900ms] ease-in-out`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Tag title="CSS" color="bg-[#0277BD]" icon="css.svg" />
          </Transition.Child>
          <Transition.Child
            enter={`transform transition duration-1000 ease-in-out`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Tag
              title="TailwindCSS"
              color="bg-[#32B1C1]"
              icon="tailwindcss.svg"
            />
          </Transition.Child>
          <Transition.Child
            enter={`transform transition duration-[1100ms] ease-in-out`}
            enterFrom="opacity-0 scale-0"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-0"
          >
            <Tag title="RxJS" color="bg-[#E32286]" icon="rxjs.svg" />
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
}
