const boxID = "box_f1b4aec33905771a9ab2"

const apiUrl = `https://jsonbox.io/${boxID}/`


const getData = async () => {
    try {
        console.log("retreiving data");
        let response = await fetch(apiUrl, { method: "GET" });
        let data = await response.json();
        console.log("returning data");
        return data
    } catch (error) {
        console.log(error)
    }

}

const postData = async (newTask) => {
    try {
        const data = { description: newTask, done: false };
        console.log(data, "data logged to api")
        let response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
        let result = await response.json()
        console.log(result);

    } catch (error) {
        console.log(error);
    }
};

const removeData = async (postID) => {
    try {
        console.log(`trying to remove post with ID ===>${postID} `);
        console.log(`trying to access? ${apiUrl}${postID}`)

        let response = await fetch(`${apiUrl}${postID}`, {
            method: "DELETE",
        })
        let result = await response.json()
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}