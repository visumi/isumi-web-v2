"use client";

import { Transition } from "@headlessui/react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import TimelineCard, { TimelineCardModel } from "./timelineCard";

export default function Timeline() {
  return (
    <div className="px-3">
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
        <div className="flex gap-1">
          <h2 className="pb-2 text-xl font-bold tracking-wider underline decoration-emerald-500 underline-offset-4">
            CARREIRA
          </h2>
          <CodeBracketIcon className="w-7 h-7 text-emerald-500" />
        </div>
      </Transition>
      <div className="flex flex-col gap-2 pb-4">
        {cards.map((card, i) => (
          <Transition
            key={card.title}
            appear={true}
            show
            enter={`transform transition duration-[${(i + 1) * 200}ms]`}
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <TimelineCard data={card} />
          </Transition>
        ))}
      </div>
    </div>
  );
}

const cards: TimelineCardModel[] = [
  {
    title: "PicPay",
    period: "2023 - Atual",
    description:
      "Desenvolvimento e manuteção da plataforma interna dos gerentes de pessoas física. Participei do processo de fusão do Banco Original com o PicPay.",
  },
  {
    title: "Banco Original",
    period: "DEZ - 2021",
    description:
      "Atuação na Plataforma Comercial do Banco com manutenções e novas entregas.",
  },
  {
    title: "Enforce - BTG Pactual",
    period: "SET - 2020",
    description:
      "Criando soluções de alto valor para os sistemas internos da empresa.",
  },
  {
    title: "LaRCom - Unicamp",
    period: "MAR - 2020",
    description: "Estágio com foco no desenvolvimento de scripts para um ERP.",
  },
];
