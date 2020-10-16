const getData = async () => {
  try {
	const API_KEY = "dc4d5dc6ccdc44a3d2cde585c687d1db"; 
	const apiUrl =
      `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
    let reponse = await fetch(apiUrl, { method: "GET" });
    let data = await reponse.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
