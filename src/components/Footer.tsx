import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className="mt-30 ">
        <hr className="text-zinc-700 mx-5"/>
        <div className="w-full h-14 flex flex-col justify-center px-5">
            <p className="text-[13px] text-zinc-400">@ankitbhagat</p>
            <div>
            <FontAwesomeIcon icon={faEnvelope} />
            </div>
        </div>
    </div>
  )
}

export default Footer