import { CodeBracketIcon } from "@heroicons/react/24/solid";
import TimelineCard, { TimelineCardModel } from "./timelineCard";

export default function Timeline() {
  return (
    <div className="px-3">
      <div className="flex gap-1">
        <h2 className="pb-2 text-xl font-bold tracking-wider underline decoration-emerald-500 underline-offset-4">
          CARREIRA
        </h2>
        <CodeBracketIcon className="w-7 h-7 text-emerald-500" />
      </div>
      <div className="flex flex-col gap-2 pb-4">
        {cards.map((card) => (
          <TimelineCard key={card.title} data={card} />
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
    description: "Atuação na Plataforma Comercial do Banco com manutenções e novas entregas.",
  },
  {
    title: "Enforce - BTG Pactual",
    period: "SET - 2020",
    description: "Criando soluções de alto valor para os sistemas internos da empresa.",
  },
  {
    title: "LaRCom - Unicamp",
    period: "MAR - 2020",
    description: "Estágio com foco no desenvolvimento de scripts para um ERP.",
  },
];
