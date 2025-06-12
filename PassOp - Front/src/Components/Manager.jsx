import { useEffect, useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef();
    const passwordRef = useRef();
    const [form, setform] = useState({
        site: "",
        username: "",
        password: ""
    })
    const [passwordArray, setpasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])
    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }

    const ShowPassword = () => {
        if (ref.current.src.includes('/src/assets/icons/show.png')) {
            ref.current.src = '/src/assets/icons/hide.png';
            passwordRef.current.type = "text";
        }
        else {
            ref.current.src = '/src/assets/icons/show.png';
            passwordRef.current.type = "password";
        }

    }

    const SavePassword = () => {
        setform({
            site: "",
            username: "",
            password: ""
        })
        if (form.site.length >= 3 && form.username.length >= 3 && form.password.length >= 3) {
            setpasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
            localStorage.setItem("passswords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        }
    }

    const copyText = (text) => {
        toast('Copied Successfully!', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: "Bounce",
        });
        navigator.clipboard.writeText(text)
    }

    // const changeImg = () =>{
    //     return <img src='/src/assets/icons/Edit.gif'/>
    // }

    const EditPassowrd = (id) => {
        setpasswordArray(passwordArray.filter((item) => { return item.id !== id }))
        setform(passwordArray.filter((i) => i.id === id)[0])
    }

    const DeletePassowrd = (id) => {
        let conform = confirm("Do you want to delete?")
        if (conform) {
            setpasswordArray(passwordArray.filter((item) => { return item.id !== id }))
            localStorage.setItem("passswords", JSON.stringify(passwordArray.filter((item) => { return item.id !== id })))
        }
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition="Bounce"
            />
            <div className="absolute top-0 -z-10 h-full w-full bg-white">
                <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-green-300 opacity-50 blur-[80px]"></div>
            </div>
            <div className="p-4 md:my-4 md:mx-20 md:py-4 md:px-20 min-h-[80.5vh]">
                <h1 className='text-4xl text font-bold text-center pt-10'>
                    <span className='text-green-700'>&lt;</span>
                    Pass
                    <span className='text-green-700'>OP/&gt;</span>
                </h1>
                <p className='text-green-900 text-lg text-center'>Your Password Manager</p>
                <div className="flex flex-col gap-7 p-4 md:my-4 md:mx-20 md:py-4 md:px-20 items-center">
                    <input placeholder="Enter URL " value={form.site} onChange={handleChange} className="rounded-full border border-green-500 w-full  p-4 py-1" type="text" name="site" id="a" />
                    <div className='flex flex-col md:flex-row w-full gap-3'>
                        <input placeholder="Enter UserName" value={form.username} onChange={handleChange} className="rounded-full border border-green-500 w-full p-4 py-1" type="text" name="username" id="b" />
                        <div className="relative">
                            <input ref={passwordRef} placeholder="Enter Password" value={form.password} onChange={handleChange} className="rounded-full border border-green-500 w-full p-4 py-1" type="password" name="password" id="c" />
                            <span className="absolute right-[4px] top-[5px] cursor-pointer">
                                <img ref={ref} className='p-1' width={23} src='/src/assets/icons/show.png' onClick={ShowPassword} />
                            </span>
                        </div>
                    </div>
                    <button onClick={SavePassword} className='flex justify-center items-center gap-2 bg-green-300 hover:bg-green-200 border border-green-500 rounded-full px-8 py-2 w-fit'>
                        <script src="https://cdn.lordicon.com/lordicon.js"></script>
                        <lord-icon
                            src="https://cdn.lordicon.com/jgnvfzqg.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
                <div className="passwords p-4 md:my-4 md:mx-8 md:py-4 md:px-8">
                    <h2 className='font-bold text-2xl pb-5'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No paswwords to show</div>}
                    {passwordArray.length > 0 &&
                        <table className="table-auto w-full rounded-md overflow-hidden">
                            <thead className='bg-green-900 text-white'>
                                <tr>
                                    <th className='py-2'>Site</th>
                                    <th className='py-2'>UserName</th>
                                    <th className='py-2'>Password</th>
                                    <th className='py-2'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='bg-green-100'>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index}>

                                        <td className='text-center py-2 border border-white'>
                                            <div className='items-center justify-center gap-2 flex flex-row'>
                                                <a className='hover:underline' href={item.site} target='_blank'>{item.site}</a>
                                                <img className='w-5 cursor-pointer' src="/src/assets/icons/copy.png" alt="copy" onClick={() => { copyText(item.site) }} />
                                            </div>
                                        </td>

                                        <td className='text-center py-2 border border-white'>
                                            <div className='items-center justify-center gap-2 flex flex-row'>
                                                <span>{item.username}</span>
                                                <img className='w-5 cursor-pointer' src="/src/assets/icons/copy.png" alt="copy" onClick={() => { copyText(item.username) }} />
                                            </div>
                                        </td>

                                        <td className='text-center py-2 border border-white'>
                                            <div className='items-center justify-center gap-2 flex flex-row'>
                                                <span>{item.password}</span>
                                                <img className='w-5 cursor-pointer' src="/src/assets/icons/copy.png" alt="copy" onClick={() => { copyText(item.password) }} />
                                            </div>
                                        </td>

                                        <td className='flex flex-row items-center justify-center gap-2 py-2 border border-white'>
                                            <span className='cursor-pointer' onClick={() => { EditPassowrd(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/fikcyfpp.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                                {/* <img className = "w-5" src="/src/assets/icons/edit.png" alt="Edit"/> */}
                                                {/* <img className='w-5' src='/src/assets/icons/Edit.gif' alt="Edit"/> */}
                                            </span>
                                            <span className='cursor-pointer' onClick={() => { DeletePassowrd(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/skkahier.json"
                                                    trigger="hover"
                                                    style={{ "width": "25px", "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>

    )
}

export default Manager