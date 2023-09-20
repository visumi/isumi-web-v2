"use client";

import { Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CakeIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { HTMLProps } from "react";

export default function About() {
  return (
    <Transition
      appear={true}
      show
      enter="transform transition duration-200"
      enterFrom="opacity-0 scale-50"
      enterTo="opacity-100 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <div className="px-3">
        <div className="flex gap-1">
          <h2 className="pb-2 text-xl font-bold tracking-wider underline decoration-emerald-500 underline-offset-4">
            SOBRE MIM
          </h2>
          <UserCircleIcon className="w-7 h-7 text-emerald-500" />
        </div>
        <div className="flex w-full rounded shadow-md bg-neutral-800 shadow-emerald-500/50">
          <div className="bg-[url('/me.jpg')] bg-cover bg-no-repeat grayscale w-40 rounded-tl rounded-bl"></div>
          <div className="flex flex-wrap w-full gap-2 p-2">
            <Tag
              title="Campinas-SP"
              icon={MapPinIcon}
              iconColor="text-red-500"
              className="flex-1"
            />
            <Tag
              title="24 anos"
              icon={CakeIcon}
              iconColor="text-purple-500"
              className="max-[320px]:flex-1 flex-0"
            />
            <div className="flex flex-col w-full gap-2">
              <Tag
                title="Eng. Front-end PL @ PicPay"
                icon={BriefcaseIcon}
                iconColor="text-green-500"
                className="flex-1"
              />
              <Tag
                title="TADS - Unicamp"
                icon={AcademicCapIcon}
                iconColor="text-sky-500"
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

interface TagProps {
  title: string;
  icon: React.ForwardRefExoticComponent<any>;
  iconColor: string;
  className?: HTMLProps<HTMLElement>["className"];
}

function Tag({ title, icon, iconColor, className }: TagProps) {
  const Icon = icon;

  return (
    <div className={`flex ${className}`}>
      <div className="flex items-center p-1 rounded-l bg-neutral-700">
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </div>
      <span className="flex text-center items-center justify-center w-full p-1 text-sm rounded-r bg-neutral-600 text-neutral-200">
        {title}
      </span>
    </div>
  );
}
