const taskUl = document.getElementById("task-list")
const removeAllBtn = document.getElementById("remove-all-btn")
const addBtn = document.getElementById("add-task-btn")
const taskInput = document.getElementById("input-field")

// gets data from apiUrl and sets to dom
const setData = async () => {

    const taskData = await getData();
    console.log("logs array of tasks", taskData);

    // Kan het zonder onderstaande regel???????   
    taskUl.querySelectorAll("*").forEach((task) => task.remove());


    taskData.forEach(task => {

        let newDiv = document.createElement("div")
        let newLi = document.createElement("li");
        let deleteLi = document.createElement("img")
        deleteLi.setAttribute("src", "noun_Trash_3595480.png")
        deleteLi.setAttribute("class", "trash-icon")
        deleteLi.setAttribute("id", task._id)
        taskUl.prepend(newDiv)
        newDiv.append(newLi, deleteLi)
        newLi.innerHTML = task.description;
    })
}


window.onload = setData()


// button that adds new task
addBtn.addEventListener("click", async () => {
    let inputValue = taskInput.value
    await postData(inputValue)
    await setData()
})

// add task on enter
taskInput.addEventListener("keydown", async event => {
    if (event.code === "Enter") {
        let inputValue = taskInput.value
        await postData(inputValue)
        await setData()
    }
})


// Remove item in the list

taskUl.addEventListener("click", async (e) => {
    // await setData()
    if (e.target.className === "trash-icon") {
        let postID = e.target.id
        await removeData(postID)
        await setData()
    }
})



removeAllBtn.addEventListener("click", () => {
    taskUl.querySelectorAll(".trash-icon").forEach(async task => {
        await removeData(task.id)
        await setData()
        
    })
})



