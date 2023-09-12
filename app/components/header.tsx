import { Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react";

interface HeaderProps {
  menuChanged(): void;
}

interface DropDownMenuProps {
  menuChanged(): void;
  isOpen: boolean;
}

interface MenuItemProps {
  title: string;
  duration: string;
}

export default function Header({ menuChanged }: HeaderProps) {
  return (
    <div className="flex items-center justify-between m-2">
      <span className="font-bold text-3xl text-neutral-50 left-0.5">泉</span>
      <span className="text-lg font-bold text-neutral-50">isumi</span>
      <Bars3Icon
        onClick={() => menuChanged()}
        className="w-8 h-8 text-neutral-100"
      />
    </div>
  );
}

export function DropDownMenu({ isOpen, menuChanged }: DropDownMenuProps) {
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter="transform transition duration-[400ms]"
      enterFrom="-translate-y-[-500px]"
      enterTo="translate-y-0"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="translate-y-0"
      leaveTo="-translate-y-[-500px]"
    >
      <div className="absolute bottom-0 w-full p-4 rounded-t-lg shadow-xl bg-neutral-800 h-1/3">
        <div className="flex flex-col h-full">
          <ChevronDownIcon
            onClick={() => menuChanged()}
            className="self-end w-8 h-8 shadow-sm text-neutral-400"
          ></ChevronDownIcon>
          <div className="flex flex-col items-center h-full justify-evenly">
            <Transition.Child
              enter={`transform transition duration-[1000ms]`}
              enterFrom="-translate-y-[-350px]"
              enterTo="translate-y-0"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-[-350px]"
            >
              <h5 className="text-lg font-bold tracking-widest underline shadow-sm text-neutral-50 decoration-solid decoration-emerald-500 decoration-2 underline-offset-8">
                SOBRE
              </h5>
            </Transition.Child>
            <Transition.Child
              enter={`transform transition duration-[1100ms]`}
              enterFrom="-translate-y-[-350px]"
              enterTo="translate-y-0"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-[-350px]"
            >
              <h5 className="text-lg font-bold tracking-widest underline shadow-sm text-neutral-50 decoration-solid decoration-emerald-500 decoration-2 underline-offset-8">
                PROJETOS
              </h5>
            </Transition.Child>
            <Transition.Child
              enter={`transform transition duration-[1200ms]`}
              enterFrom="-translate-y-[-350px]"
              enterTo="translate-y-0"
              leave="transform duration-200 transition ease-in-out"
              leaveFrom="translate-y-0"
              leaveTo="-translate-y-[-350px]"
            >
              <h5 className="text-lg font-bold tracking-widest underline shadow-sm text-neutral-50 decoration-solid decoration-emerald-500 decoration-2 underline-offset-8">
                CONTATO
              </h5>
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  );
}
