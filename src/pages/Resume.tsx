import { PDFViewer } from "../components/ui/PDFViewer"
import Navbar from "../components/Navbar"

const Resume = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-sm bg-zinc-9 font-geist bg-white dark:bg-black text-black dark:text-white">
            <div className="w-full md:w-fit">
                <Navbar />
                <PDFViewer />
            </div>
        </div>

    )
}

export default Resume
