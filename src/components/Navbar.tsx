import details from './Data';
const Navbar = ({Name, Year}) => {
  return (
    <div className='flex justify-between w-44 py-3'>
        <p>{Name}</p>
        <p>{Year}</p>
    </div>
  )
}

export default Navbar


