import Button from "./Button"
const Connect = () => {
  return (
    <div className='mt-10 px-4 flex flex-col gap-4'>
        <h2 className="text-lg font-semibold">Connect</h2>
        <p className="text-sm text-zinc-300">Feel free to contact me <a href="mailto:main.ankitbhagat@gmail.com" 
          className="underline font-semibold">main.ankitbhagat@gmail.com</a></p>
        <div className="flex flex-wrap gap-2">
            <Button btnName="Github" link="https://github.com/ankitsensei"/>
            <Button btnName="X" link="https://x.com/webdevankit"/>
            <Button btnName="Linkedin" link="https://www.linkedin.com/in/ankit-bhagat-139276241/"/>
            <Button btnName="Instagram" link="https://www.instagram.com/ankitsensei/"/>
            <Button btnName="Resume" link="https://www.instagram.com/ankitsensei/"/>
        </div>
    </div>
  )
}

export default Connect