import 'react'

const Navbar = () => {
  return (
    <>
      <nav className="bg-violet-950 text-white p-4 flex justify-between items-center">
        <div className="logo">
            <span className="font-bold text-xl mx-8">iTask</span>
        </div>
        <div className="menu">
            <ul className=" flex gap-10 mx-10">
                <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
                <li className='cursor-pointer hover:font-bold transition-all'>Your Tasks</li>
            </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
