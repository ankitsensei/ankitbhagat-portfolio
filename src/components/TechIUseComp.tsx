const TechIUseComp = ({title, img}) => {
  return (
    <button className="flex justify-center items-center gap-2 text-sm px-3 h-8 rounded-3xl bg-zinc-100 dark:bg-zinc-800">
        {title} <img className="w-5" src={img} alt="" />
    </button>
  )
}

export default TechIUseComp