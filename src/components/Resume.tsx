import PdfResume from "../assets/ankit-resume.pdf"

const Resume = () => {
    return (
        <div className="w-full h-screen">
            {/* <embed src={PdfResume} type="pdf" /> */}
            <iframe src={PdfResume} width={1000} height={1000}></iframe>
        </div>
    )
}

export default Resume