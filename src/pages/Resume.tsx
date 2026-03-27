import { PDFViewer } from "../components/ui/PDFViewer"
import Navbar from "../components/Navbar"

const Resume = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-10 w-full text-sm bg-zinc-9 font-geist bg-white dark:bg-black text-black dark:text-white">
            <div>
                <Navbar />
                <PDFViewer />
            </div>
        </div>

    )
}

export default Resume
