import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const WorkExperience = () => {
    return (
        <div>
            <div className="mt-10 flex flex-col gap-4">
                <div className="flex gap-2">
                    <h1 className="text-lg">Work Experience</h1>
                    <button className="flex justify-center items-center gap-2 text-sm w-30 h-8 rounded-3xl bg-zinc-800">
                        Know more
                        <FaArrowRight className="rotate-320 text-[10px]" />
                    </button>
                </div>
                <div className="border-2 border-zinc-700 rounded-xl w-full">
                    <div className="flex justify-between m-2 p-2">
                        <h2>Software Development Engineer</h2>
                        <p className="text-zinc-400">November 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperience;
