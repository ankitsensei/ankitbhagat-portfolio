import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faSun, faMoon, faDesktop } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
  return (
    <div className="mt-30">
        <hr className="text-zinc-700 mx-5"/>
        <div className="w-full h-14 flex justify-between items-center px-5">
            <p className="text-[13px] text-zinc-400">@ankitbhagat</p>
            <div className="flex gap-3">
              <FontAwesomeIcon icon={faSun} />
              <FontAwesomeIcon icon={faMoon} />
              <FontAwesomeIcon icon={faDesktop} />
            </div>
        </div>
    </div>
  )
}

export default Footer