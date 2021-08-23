
import List from "./List";

const ToDoList = (props) => {
    return (
        <div>
            <div>
                <List list={props.list} />
            </div>
        </div>
    )
}

export default ToDoList;