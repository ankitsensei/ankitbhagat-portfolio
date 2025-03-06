import details from './Data';
const Navbar = ({Name, Year}) => {
  return (
    <div className='flex justify-between w-60 my-2 py-2 px-3 hover:text-lg hover:border-2 rounded-3xl'>
        <p>{Name}</p>
        <p>{Year}</p>
    </div>
  )
}

export default Navbar


