import { useState } from 'react';


const Intro: React.FC = () => {
  const [status, setStatus] = useState<string>("Software Enginner")
  return (
    <div>
        <div className='flex flex-col gap-7 px-4 '>
            <div>
                <p className='text-lg'>Ankit</p>
                <p className='text-zinc-600 dark:text-zinc-400'>{status}</p>
            </div>
        <p className='text-zinc-600 dark:text-zinc-300'>Break things and fixing them back. Software Enginner, Designer and lot more.</p>
    </div>
    </div>
  )
}

export default Intro