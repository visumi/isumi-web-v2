interface TimelineCardProps {
  data: TimelineCardModel;
}

export default function TimelineCard({ data }: TimelineCardProps) {
  return (
    <div className="h-32 p-2 bg-neutral-800 rounded">
      <div>
        <h2 className={`text-neutral-100 text-md font-medium tracking-wide`}>
          {data.title}
        </h2>
        <span className="text-sm text-neutral-400">{data.period}</span>
      </div>
      <p className="text-xs text-neutral-200">{data.description}</p>
    </div>
  );
}

export interface TimelineCardModel {
  title: string;
  period: string;
  description: string;
}
