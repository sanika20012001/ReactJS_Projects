

const Navbar = () => {
        return (
                <nav className='bg-slate-800 text-white'>
                        <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">
                                <div className='logo font-bold text-2xl'>
                                        <span className='text-green-700'>&lt;</span>
                                        Pass
                                        <span className='text-green-700'>OP/&gt;</span>

                                </div>
                                <ul>
                                        <li className='flex gap-4 items-center '>
                                                <a className='hover:font-bold' href='#'>Home</a>
                                                <a className='hover:font-bold' href='#'>About</a>
                                                <a className='hover:font-bold' href='#'>Login</a>
                                                <img className = 'w-8 hover:w-9 cursor-pointer invert' src="/src/assets/icons/github.svg" alt="text"/>
                                                
                                        </li>
                                </ul>
                        </div>
                </nav>
        )
}

export default Navbar