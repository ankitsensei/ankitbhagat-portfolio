import { ThemeProvider } from '../components/ThemeContext'
import { motion } from "motion/react"

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
      <motion.div
        className=" bg-white dark:bg-black w-full h-full text-black dark:text-white">
        <div className='h-full flex flex-col w-full max-w-2xl mx-auto font-geist'>
          <div className="flex flex-col gap-4">
            <a href={github} target='_blank'>
              <h2 className="text-xl underline">{heading}</h2>
            </a>
            <img src={image} alt={heading || "Project image"} className="rounded-2xl border-2 border-zinc-800"
              onClick={() => onImageClick && onImageClick(image)} />
            <p className="text-zinc-600 dark:text-zinc-400 text-md">{description}</p>
            <div className='flex flex-wrap gap-1'>
              {
                techStack?.map((element, index) => (
                  <li
                    key={index}
                    className='list-none px-2 py-1 border-1 border-zinc-700 text-zinc-300 rounded-xl text-sm font-light'
                  >{element}</li>
                ))
              }
            </div>
          </div>
        </div>
        <hr className='text-zinc-800 my-6' />
      </motion.div>
    </ThemeProvider>


  )
}

export default ProjectsComp