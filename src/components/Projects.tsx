// import { useState } from "react";
import ProjectComp from "./ProjectsComp"
import FocusMode from "../assets/imgs/focusModeExtension.png"
import MovieDB from "../assets/imgs/MovieDB.png"
import BillSplitter from "../assets/imgs/Bill-splitter.png"
const Projects = () => {
  return (
    <div className="mt-10 px-4  w-full h-full bg-white dark:bg-black">
      <h1 className="text-lg font-medium">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <ProjectComp image={BillSplitter} heading='Bill Splitter' description='A bill Splitter Web App, which stores the history of bill splits among friends. It has two sections Unsettled and Settled which shows dues paid by friends or not. And other features too.' />
        <ProjectComp image={FocusMode} heading='Focus Mode' description='It is a chrome extension which block any sites you put in it. It really helps you to be productive without any distractions.' />
        <ProjectComp image={MovieDB} heading='MovieDB' description="It is a movie database, where you can find a lot of movies. (Can't watch)" />
      </div>

    </div>
  )
}

export default Projects