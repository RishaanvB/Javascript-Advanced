const taskUl = document.getElementById("task-list")
const removeAllBtn = document.getElementById("remove-all-btn")
const addBtn = document.getElementById("add-task-btn")
const taskInput = document.getElementById("input-field")

// gets data from apiUrl 
const setData = async () => {
    try {
        const taskData = await getData();
        console.log(taskData);
        displayTasksToDom(taskData)

    } catch (error) {
        console.log(error);
    }
}

// retrieves data from api??? on pageload
window.onload = setData()



removeAllBtn.addEventListener("click", () => {
    taskUl.querySelectorAll("*").forEach((listItem) => listItem.remove())
})


const createTasks = () => {
    let newDiv = document.createElement("div")
    let newLi = document.createElement("li");
    let deleteLi = document.createElement("img")
    deleteLi.setAttribute("src", "noun_Trash_3595480.png")
    taskUl.prepend(newDiv)
    newDiv.append(newLi, deleteLi)
    let inputValue = taskInput.value
    newLi.innerHTML = inputValue
    postData(inputValue)


    deleteLi.addEventListener("click", (e) => {
        // console.log(task._id);
        e.target.parentElement.remove();



    })


}


// displays task description from api into dom on pageload
const displayTasksToDom = array => {


    array.forEach(task => {
        let newDiv = document.createElement("div")
        let newLi = document.createElement("li");
        let deleteLi = document.createElement("img")
        deleteLi.setAttribute("src", "noun_Trash_3595480.png")
        taskUl.appendChild(newDiv)
        newDiv.append(newLi, deleteLi)
        newLi.innerHTML = task.description;

        // remove button functionality
        deleteLi.addEventListener("click", (e) => {
            console.log(task._id);
            console.log(e.target.parentElement);
            e.target.parentElement.remove();




        })

    })
}
// button that adds new task
addBtn.addEventListener("click", () => {
    createTasks()

})

// add task on enter
taskInput.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
        createTasks()
    }
})








