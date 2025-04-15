import Button from "./Button"


const WorkExperience: React.FC= () => {
    return (
        <div>
            <div className="mt-10 px-4  flex flex-col gap-4">
                <div className="flex gap-2">
                    <h1 className="text-lg font-medium">Work Experience</h1>
                    <Button btnName="Know more" link="#"/>
                </div>
                <div className="border-2 border-zinc-100 dark:border-zinc-900 rounded-xl w-full m-2 p-2 flex flex-col gap-4">
                    <div>
                        <div className="flex justify-between ">
                            <h2>Frontend Web-Developer</h2>
                            <p className="text-zinc-600 dark:text-zinc-400">November 2024</p>
                        </div>
                        <p className='text-zinc-500 dark:text-zinc-400'>Hack United (US)</p>
                    </div>
                    <ul className='text-zinc-600 dark:text-zinc-400 flex flex-col gap-2 list-disc px-5'>
                        <li><b className='underline'>Discord Server: Hack United</b> - A global community that organizes online <b className='text-zinc-600 dark:text-white'>hackathons</b>, connecting developers, designers, and tech enthusiasts from around the world.</li>

                        <li><b className='underline'>Role: Web Developer & Manager</b> – I design, develop, and maintain the official websites for Hack United, ensuring smooth registration, event updates, and participant engagement.</li>

                        <li><b className='underline'>Impact</b> – Helping build a worldwide platform that encourages innovation, learning, and collaboration among young tech talents through <b className='text-white'>regular hackathon events</b>.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
