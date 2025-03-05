import details from './Data';
const Navbar = () => {
  return (
    <div className='flex flex-col justify-between'>
        {
            details.map((item, index) => (
                <div key={index}>
                    <div className='flex justify-between w-1/2'>
                        <div className='flex w-40 justify-between'>
                            <h2>{item[0]}</h2>
                            <p>{item[1]}</p>
                        </div>
                        <div className=''>
                            <p></p>
                            <p>{item[2]}</p>
                        </div>
                        </div>
                </div>
            ))
        }
    </div>
  )
}

export default Navbar


