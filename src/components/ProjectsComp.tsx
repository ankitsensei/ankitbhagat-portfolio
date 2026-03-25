import { ThemeProvider } from '../components/ThemeContext'
import { motion } from "motion/react"

// import { Skeleton } from "../components/ui/skeleton"

type ProjectProps = {
  image: string;
  heading: string;
  description: string;
  onImageClick?: (image: string) => void;
  techStack?: string[];
  github: string;
}

const ProjectsComp = ({ image, heading, description, onImageClick, techStack, github }: ProjectProps) => {

  return (
    <ThemeProvider>
      <motion.div whileHover={{
        scale: 1.04,
        // Will be used when gesture starts
        transition: { duration: 0.3 }
      }}
        // Will be used when gesture ends
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-black w-68 pb-2 text-black dark:text-white border border-zinc-800 rounded-xl ">
        <div className='h-full w-full flex flex-col mx-auto font-inter relative'>
          <p className='px-3 bg-green-500 w-fit rounded text-sm absolute right-3 top-3'>Live</p>
          <div className="flex flex-col gap-4 w-full">
            <img src={image} alt={heading || "Project image"} className="w-full h-48"
              onClick={() => onImageClick && onImageClick(image)} />
            <div className='px-4 py-2 flex flex-col gap-3'>
              <a href={github} target='_blank'>
                <h2 className="text-md text-zinc-300">{heading}</h2>
              </a>
              <p className="text-zinc-600 dark:text-zinc-500 text-sm">{description}</p>
              <div className='flex flex-wrap gap-1 cursor-default'>
                {
                  techStack?.map((element, index) => (
                    <li
                      key={index}
                      className='list-none px-2 py-[.5px] border-1 border-zinc-900 dark:border-zinc-700 dark:text-zinc-400 text-zinc-600 rounded text-sm font-light'
                    >{element}</li>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </ThemeProvider>


  )
}

export default ProjectsComp