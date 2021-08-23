import React from "react";
function ListItem(props) {
    return(
        <li>{props.value} </li>
    )
}

const List = (props) => {
    const tasks=props.list;
    const listItems = tasks.map(
        (task)=>
            <ListItem key={task.id} value={task.value} />
    )
  return (
      <ol className="todo-list">
          {listItems}
      </ol>
  )
}
export default List;