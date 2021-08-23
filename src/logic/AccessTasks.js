let tasks=[
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
    const newTasks=[
        ...tasks,
        {
            id:`task${task}`,
            value:task
        }
    ]
    tasks =newTasks;
}

export  {getTasks,addTask}