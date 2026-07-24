import SkillsComp from "./ui/SkillsComp";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaFigma,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiPostman,
  SiTypescript,
  SiPostgresql,
  SiVercel,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandFramerMotion, TbBrandCpp, TbFileTypeSql } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <div>
      <h1 className="text-lg md:text-2xl mb-2 md:mb-4 dark:text-zinc-400 text-zinc-600">
        Skills
      </h1>
      <div className="flex flex-wrap gap-1 md:gap-1.5">
        <SkillsComp title="React" icon={<FaReact />} />
        <SkillsComp title="TypeScript" icon={<SiTypescript />} />
        <SkillsComp title="JavaScript" icon={<IoLogoJavascript />} />
        <SkillsComp title="Python" icon={<FaPython />} />
        <SkillsComp title="C/C++" icon={<TbBrandCpp />} />
        <SkillsComp title="Node" icon={<FaNodeJs />} />
        <SkillsComp title="Express" icon={<SiExpress />} />
        <SkillsComp title="SQL" icon={<TbFileTypeSql />} />
        <SkillsComp title="MongoDB" icon={<SiMongodb />} />
        <SkillsComp title="PostgreSQL" icon={<SiPostgresql />} />
        <SkillsComp title="Supabase" icon={<SiSupabase />} />
        <SkillsComp title="Firebase" icon={<SiFirebase />} />
        <SkillsComp title="Tailwind" icon={<RiTailwindCssFill />} />
        <SkillsComp title="Motion" icon={<TbBrandFramerMotion />} />
        <SkillsComp title="Postman" icon={<SiPostman />} />
        <SkillsComp title="Vercel" icon={<SiVercel />} />
        <SkillsComp title="Git" icon={<FaGitAlt />} />
        <SkillsComp title="GitHub" icon={<FaGithub />} />
        <SkillsComp title="Figma" icon={<FaFigma />} />
      </div>
    </div>
  );
};

export default Skills;
