type SkillsCompProps = {
  title: string;
  icon: React.ReactNode;
};

const SkillsComp: React.FC<SkillsCompProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center justify-center gap-2 border border-zinc-700 rounded-full w-fit px-[6px] py-[0.5px] text-sm dark:text-zinc-400 text-zinc-600">
      {icon}
      <span>{title}</span>
    </div>
  );
};

export default SkillsComp;
