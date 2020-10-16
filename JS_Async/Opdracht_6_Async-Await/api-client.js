// const getData = async function () {
// 	try {
// 		let API_KEY = "dc4d5dc6ccdc44a3d2cde585c687d1db";
//     const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
//     let reponse = await fetch(apiUrl, { method: "GET" });
//     let data = await reponse.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };



const API_KEY = "dc4d5dc6ccdc44a3d2cde585c687d1db";

const getData = async function () {
    const apiUrl = "https://api.themoviedb.org/3/movie/550?api_key=dc4d5dc6ccdc44a3d2cde585c687d1db";
    try {
        const res = await fetch(apiUrl, { method: "GET" });
        const data = await res.json();
        console.log("The data in getData function ", data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

