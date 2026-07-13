type SkillsCompProps = {
  title: string;
  icon: React.ReactNode;
};

const SkillsComp: React.FC<SkillsCompProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-center gap-1 md:gap-2 border border-zinc-700 rounded-full w-fit px-1.5 md:px-[6px] py-[1px] text-xs md:text-sm dark:text-zinc-400 text-zinc-600">
      <span className="text-sm md:text-base">{icon}</span>
      <span>{title}</span>
    </div>
  );
};

export default SkillsComp;
