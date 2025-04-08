
const ProjectsComp = ({image, heading, description}) => {
  return (
    <div className="flex flex-col mt-8 gap-1">
        <img src={image} alt="img" className="rounded-2xl border-2 border-zinc-800"/>
        <h2>{heading}</h2>
        <p className="text-zinc-400 text-sm">{description}</p>
    </div>
  )
}

export default ProjectsComp