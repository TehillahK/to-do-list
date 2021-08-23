const tasks=[
    {
        id:"yyuiooppqqq",
        value:"Get bread"
    },
    {
        id:"bbybuiii",
        value: "dance down"
    }
]
//create fake id
function generateID(text){
    return text.toString()
}

//returns all tasks
function getTasks(){
    return tasks;
}

//add task to task table
function addTask(task){
    tasks.push(
        {
            id:generateID(task),
            value: task,
        }
    )
}

export  {getTasks,addTask}