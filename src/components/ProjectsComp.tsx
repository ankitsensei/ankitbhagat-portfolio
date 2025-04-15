type ProjectProps = {
  image: string;
  heading: string;
  description: string;
}

const ProjectsComp = ({image, heading, description}: ProjectProps) => {

return (
    <div className="flex flex-col mt-8 gap-1">
        <img src={image} alt={heading || "Project image"} className="rounded-2xl border-2 border-zinc-800"/>
        <h2 className="font-medium">{heading}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 text-md">{description}</p>
    </div>
  )
}

export default ProjectsComp