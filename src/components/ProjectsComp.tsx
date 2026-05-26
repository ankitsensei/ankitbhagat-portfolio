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
  liveLink?: string;
}

const ProjectsComp = ({ image, heading, description, onImageClick, techStack, github, liveLink }: ProjectProps) => {

  return (
    <ThemeProvider>
      <motion.div whileHover={{
        scale: 1.04,
        // Will be used when gesture starts
        transition: { duration: 0.3 }
      }}
        // Will be used when gesture ends
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-zinc-900 w-full md:w-68 lg:w-68 pb-2 text-black dark:text-white border border-zinc-800 rounded-xl">
        <div className='h-full w-full flex flex-col mx-auto font-inter relative'>
          <a href={liveLink} target='_blank'>
            <p className='px-2 py-[1px] bg-green-500  w-fit rounded text-sm absolute right-3 top-3 flex gap-1 items-center'><span className="blink_me"></span>Live</p>
          </a>
          <div className="flex flex-col gap-4 w-full h-full">
            <img src={image} alt={heading || "Project image"} className="w-full h-full rounded-xl object-cover"
              onClick={() => onImageClick && onImageClick(image)} />
            <div className='px-4 py-2 flex flex-col gap-3 justify-between h-full'>
              <div className='flex flex-col '>
                <a href={github} target='_blank'>
                  <h2 className="text-md text-zinc-300">{heading}</h2>
                </a>
                <p className="text-zinc-600 dark:text-zinc-500 text-[13px]">{description}</p>
              </div>
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