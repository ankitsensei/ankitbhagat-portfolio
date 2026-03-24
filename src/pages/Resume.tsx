import PdfResume from "../assets/ankit-resume.pdf"

const Resume = () => {
    return (
        <div className="w-full h-screen">
            <iframe src={PdfResume} className="w-full h-screen"></iframe>
        </div>
    )
}

export default Resume