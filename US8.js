// Task-6
// Write a program to build React app for task todo list.
// Add 1 input field and button and by clicking on button display entered task on the same page.
// Also, add delete button with each added task to delete the task. 
import React,{useState} from 'react'

function US8()
{

    const[Task,setTask]=useState(" ")
    const[ToDoList,setToDoList]=useState([])

    function hc(e)
    {
        setTask(e.target.value)
    }     
    function AddTask()
    {
        if(!ToDoList.includes(Task))
        {
         setToDoList([...ToDoList,Task])
        }
        else
        {
            alert("Task Is Alredy Added!!")
        }
    }
    function deleteTask(taskname)
    {
        setToDoList(ToDoList.filter((Task)=>
        {
            if(Task!=taskname)
            {
                return true
            }
            else
            {
                return false
            }
        }))
    }
    return(
        <>
        <h1>Enter Task:</h1>
        <input onChange={hc}/>
        <button onClick={AddTask}>Add Task</button>
        {
            ToDoList.map((Task)=>
            {
            return (
                <>
                <h1> {Task} </h1>
                <button onClick={()=>deleteTask(Task)}>Delete</button>
                </>
            )
            })
        }
        </>
    )
}
export default US8