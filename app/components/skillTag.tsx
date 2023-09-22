import Image from "next/image";

interface SkillTagProps {
  title: string;
  color: string;
  icon: string;
}

export default function SkillTag({ title, color, icon }: SkillTagProps) {
  return (
    <div className={`flex gap-1 p-2 rounded shadow-md ${color}`}>
      <Image src={`/${icon}`} alt="Tag Icon" width={24} height={24}></Image>
      <span className="text-neutral-50">{title}</span>
    </div>
  );
}
