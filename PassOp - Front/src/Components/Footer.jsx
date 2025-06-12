

const Footer = () => {
    return (
        <>
        <div className="bg-slate-800 text-white flex flex-row justify-evenly items-center w-full p-3">
        <div className='logo font-bold text-2xl mx-5'>
                <span className='text-green-700'>&lt;</span>
                Pass
                <span className='text-green-700'>OP/&gt;</span>

            </div>
            <div className="flex flex-row items-center gap-1">
                Created with <img className='w-5 mx-1' src="/src/assets/icons/heart.png" alt="heart" /> by Sanika
            </div>
        </div>
            
        </>

    )
}

export default Footer