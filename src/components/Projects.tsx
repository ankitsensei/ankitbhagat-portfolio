import { useState } from "react";
import ProjectComp from "./ProjectsComp"
import FocusMode from "../assets/imgs/focusModeExtension.jpeg"
import MovieDB from "../assets/imgs/MovieDB.png"
const Projects = () => {

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const handleImgClick = (imageUrl:string) => {
    setSelectedImg(imageUrl);
  }
  const handleClose = () => {
    setSelectedImg(null);
  }

  return (
    <div className="mt-10 px-4  w-full h-full bg-white dark:bg-black">
        <h1 className="text-lg font-medium">Projects</h1>
        <div className="lg:flex gap-8">
            <ProjectComp image={FocusMode} heading='Focus Mode' description='It is a chrome extension which block any sites you put in it. It really helps you to be productive without any distractions.' />
            <ProjectComp image={MovieDB} heading='MovieDB' description="It is a movie database, where you can find a lot of movies. (Can't watch)"/>
        </div>

    </div>
  )
}

export default Projects