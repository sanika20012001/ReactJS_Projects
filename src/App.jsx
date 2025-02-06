import { useState, useEffect } from 'react'
import './App.css'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Navbar from './Components/Navbar'
import { v4 as uuidv4 } from 'uuid'; //helps to give unique id wherever it is passed

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(()=>{
    let todoString = localStorage.getItem("todos");
    if(todoString)
    {
      let todos = JSON.parse(todoString)
      setTodos(todos)
    }
  },[])

  const saveToLS = () =>{
    console.log(todos)
    console.log(JSON.stringify(todos))
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const handleAdd = () => {
    // console.log(...todos)
    setTodos([...todos, {id:uuidv4(), todo, isCompleted:false}])
     //update todos array with new entered todo
    setTodo("")
    saveToLS()
  }

  const handleEdit = (e, id) => {
      let t = todos.filter(item => item.id === id)
      setTodo(t[0].todo)
      let newTodods = todos.filter(item=>{
        return item.id !== id
      })
      setTodos(newTodods)
      saveToLS()
  }

  const handleDelete = (e, id) => {
      let newTodods = todos.filter(item=>{
      return item.id !== id
    })
    setTodos(newTodods)
    //console.log(newTodods)
    saveToLS()
  }

  const handleText = (e) => {
    setTodo(e.target.value)
    console.log(typeof(todo))
    
  }

  const handleCheckbox = (e) =>{
    let id = e.target.name; // generate id of single element of todo array (without using uuid package)
    let index = todos.findIndex(item =>{
      return item.id === id
    })
    
    let newTodods = [...todos] //by defining todos this way, newtodos becomes new array, else bcoz of same reference strike out property wont work
    // console.log(newTodods)
    newTodods[index].isCompleted = !newTodods[index].isCompleted;
    setTodos(newTodods)
    console.log(typeof(todos))
    saveToLS()
  }

  const toggleFinished = () =>{
    setshowFinished(!showFinished)
  }

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-1/2">
      <h1 className='text-center font-bold text-2xl my-5'>ITask-Manage daily routine tasks here</h1>
        <div className="addTodo my-5 flex-col">
          <h2 className='text-lg font-bold pb-5'>Add Todo</h2>
          <input type="text" value={todo} onChange={handleText} className="border-violet-500 p-2 rounded-2xl w-10/12" />
          <button onClick={handleAdd} disabled={todo.length<=2} className="bg-violet-700 hover:bg-violet-950 text-sm font-semibold text-white p-2 py-2 px-2 rounded-lg mx-6 border-spacing-5 disabled:bg-violet-600">Add</button>
        </div>
        <div className="finish flex gap-5">
        <input type="checkbox" checked={showFinished} onChange={toggleFinished}/>
        <p>Show Finished</p>
        </div>
        <h2 className='text-lg font-bold pt-5'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No todos to display</div>}
          {todos.map((item) => {
            return((showFinished || !item.isCompleted)) && <div key={item.id} className="todo flex w-3/5 my-3 justify-between">
              <div className="flex gap-5">
                <input type="checkbox" name = {item.id} checked={item.isCompleted} onChange={handleCheckbox}/>
                <div className={item.isCompleted?"line-through":""}>{item.todo}</div>
              </div>
             
              <div className="btn flex h-full self-center">
                <button onClick={(e)=>handleEdit(e,item.id)} className="bg-violet-700 hover:bg-violet-950 text-sm font-semibold text-white p-2 py-1 rounded-md mx-2"><FaEdit/></button>
                <button onClick={(e)=>handleDelete(e,item.id)} className="bg-violet-700 hover:bg-violet-950 text-sm font-semibold text-white p-2 py-1 rounded-md mx-2"><MdDelete/></button>
              </div>
            </div>
          })}
         
        </div>

      </div>
      
    </>
  )
}
export default App


