interface TimelineCardProps {
  title: string;
  bgColor: string;
}

export default function TimelineCard({title, bgColor}: TimelineCardProps) {
  return <div className={`${bgColor} h-32`}>{title}</div>;
}
