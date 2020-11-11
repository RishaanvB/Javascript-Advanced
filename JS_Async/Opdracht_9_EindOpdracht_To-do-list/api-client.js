const boxID = "box_f1b4aec33905771a9ab2"
const recordID = "5faae6b27b86a40017f72f87"


const apiUrl = `https://jsonbox.io/${boxID}/`
const getData = async () => {
    try {
        let response = await fetch(apiUrl, { method: "GET" });
        let data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }

}

const postData = (newTask) => {
    try {
        const data = { description: newTask, done: false };
        fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        console.log(error);
    }
};

