import Button from "./Button"
const Connect = () => {
  return (
    <div className='mt-10 px-4 flex flex-col gap-4'>
        <h2 className="text-lg font-semibold">Connect</h2>
        <p className="text-sm text-zinc-300">Feel free to contact me <u>main.ankitbhagat@gmail.com</u></p>
        <div className="flex flex-wrap gap-2">
            <Button btnName="Github"/>
            <Button btnName="X"/>
            <Button btnName="Linkedin"/>
            <Button btnName="Instagram"/>
            <Button btnName="Resume"/>
        </div>
    </div>
  )
}

export default Connect