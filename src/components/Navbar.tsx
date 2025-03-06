import details from './Data';
const Navbar = ({Name, Year}) => {
  return (
    <div className='flex flex-col justify-between'>
        <p>{Name}</p>
        <p>{Year}</p>
    </div>
  )
}

export default Navbar


