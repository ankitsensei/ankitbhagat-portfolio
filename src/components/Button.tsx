import { FaArrowRight } from "react-icons/fa"
const Button = ({btnName}) => {
  return (
    <div>
        <button className="flex justify-center items-center gap-2 text-sm px-3 h-8 rounded-3xl bg-zinc-800">
            {btnName}
            <FaArrowRight className="rotate-320 text-[10px]" />
        </button>
    </div>
  )
}

export default Button