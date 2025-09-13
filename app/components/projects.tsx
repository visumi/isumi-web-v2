"use client";

import { Transition } from "@headlessui/react";
import {
  BanknotesIcon,
  CircleStackIcon,
  PuzzlePieceIcon,
  ScissorsIcon,
  TableCellsIcon
} from "@heroicons/react/24/outline";

export default function Projects() {
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
      <div className="px-3 md:px-32">
        <div className="flex gap-1">
          <h2 className="pb-2 text-xl font-bold tracking-wider underline md:text-2xl decoration-emerald-500 underline-offset-4">
            PROJETOS
          </h2>
          <PuzzlePieceIcon className="w-7 h-7 md:w-8 md:h-8 text-emerald-500" />
        </div>
        <div className="flex gap-2 flex-col lg:flex-row">
          <FinanceCard />
          <BarberoCard />
        </div>
      </div>
    </Transition>
  );
}

function FinanceCard() {
  return (
    <div className="flex flex-col flex-shrink-0 gap-2 p-2 rounded bg-neutral-800 lg:w-96">
      <div className="relative flex justify-center p-2 overflow-hidden bg-zinc-200 rounded-sm">
        <span className="text-2xl font-extrabold tracking-wide text-zinc-900">
          barbero
        </span>
        <ScissorsIcon className="absolute top-0 w-12 h-12 text-zinc-300 -left-3" />
        <TableCellsIcon className="absolute w-12 h-12 text-zinc-300 -right-3 -bottom-3" />
      </div>
      <p className="text-xs tracking-wide text-neutral-200">
        Uma plataforma para gestão de clientes, serviços e prestadores para o ramo de barbearias.
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div className="flex gap-1">
          <Pill title="Next.js" />
          <Pill title="TailwindCSS" />
        </div>
        {/* <button className="rounded bg-emerald-500 hover:brightness-90">
          <a
            href="https://finance.isumi.com.br/"
            target="_blank"
            aria-label="Finance"
          >
            <GlobeAltIcon className="p-1 h-7 w-7 text-emerald-50" />
          </a>
        </button> */}
      </div>
    </div>
  );
}

function BarberoCard() {
  return (
    <div className="flex flex-col flex-shrink-0 gap-2 p-2 rounded bg-neutral-800 lg:w-96">
      <div className="relative flex justify-center p-2 overflow-hidden bg-purple-200 rounded-sm">
        <span className="text-2xl font-extrabold tracking-wide text-purple-900">
          finance.
        </span>
        <BanknotesIcon className="absolute top-0 w-12 h-12 text-purple-300 -left-3" />
        <CircleStackIcon className="absolute w-12 h-12 text-purple-300 -right-3 -bottom-3" />
      </div>
      <p className="text-xs tracking-wide text-neutral-200">
        Uma plataforma para controle de finanças que se adapta com seu limite de
        gastos mensais. Separe seus gastos por categorias e formas de pagamento.
      </p>
      <div className="flex items-center justify-between pt-4">
        <div className="flex gap-1">
          <Pill title="Next.js" />
          <Pill title="TailwindCSS" />
          <Pill title="Node.js" />
        </div>
        {/* <button className="rounded bg-emerald-500 hover:brightness-90">
          <a
            href="https://finance.isumi.com.br/"
            target="_blank"
            aria-label="Finance"
          >
            <GlobeAltIcon className="p-1 h-7 w-7 text-emerald-50" />
          </a>
        </button> */}
      </div>
    </div>
  );
}

interface PillProps {
  title: string;
}

function Pill({ title }: PillProps) {
  return (
    <div className="h-6 px-2 py-1 text-xs rounded-full bg-neutral-600 text-neutral-300">
      {title}
    </div>
  );
}
