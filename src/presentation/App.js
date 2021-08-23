import './scss/main.scss'
import ToDoList from "./components/ToDoList";
import {getTasks} from "../logic/AccessTasks";

function onClick(){
    console.log("click")
}

function Header(props){
    return(
        <div className="todo-header">
            <input placeholder={"Task"}/>
            <a href="#" className="enter-button" onClick={onClick}>Add Task</a>
        </div>
    )
}
function App() {
  return (
    <div className="container">
        <div className="flex">
            <div className="app">
                <Header />
                <ToDoList list={getTasks()} />
            </div>
        </div>
    </div>
  );
}

export default App;
