import './scss/main.scss'
import ToDoList from "./components/ToDoList";
import {getTasks,addTask} from "../logic/AccessTasks";
import {useEffect, useState} from "react";

function onClick(text,updateList){
    console.log(`you entered ${text}`)
   // addTask(text)
    updateList(text)
}

function Header(props){
    const [text,setText]=useState("");
    const update=props.update;
    return(
        <div className="todo-header">
            <input
                onChange={event => setText(event.target.value)

                }
                value={text}
                placeholder={"Task"}
            />
            <a href="#" className="enter-button" onClick={
                ()=>{
                    onClick(text,props.update)

                }
            }>Add Task</a>
        </div>
    )
}
function App() {
    const [tasks ,setTasks]=useState(getTasks())


    const updateList = (task) => {


       // setTasks([...tasks]);
        const newTasks=[
            ...tasks,
            {
                id:`task${task}`,
                value:task
            }
        ]
        setTasks(newTasks)
        console.log("refresh")
        console.log(tasks)
    }
  return (
    <div className="container">
        <div>
            <h1>To Do List</h1>
            <p>This is a web app written by Tehillah Kangamba. Please enter task.</p>
        </div>
        <div className="flex">
            <div className="app">
                <Header update={updateList} />
                <ToDoList list={tasks}  />
            </div>
        </div>
    </div>
  );
}

export default App;
