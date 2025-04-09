import { FaArrowRight } from "react-icons/fa"

type ButtonProps = {
  btnName: string;
  link:string;
}
const Button: React.FC<ButtonProps> = ({btnName, link}) => {
  return (
    <div>
        <a href={link} target="#"><button className="flex justify-center items-center gap-2 text-sm px-3 h-8 rounded-3xl bg-zinc-800">
            {btnName}
            <FaArrowRight className="rotate-320 text-[10px]" />
        </button></a>
        
    </div>
  )
}

export default Button