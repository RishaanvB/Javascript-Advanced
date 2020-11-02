const API_KEY = "dc4d5dc6ccdc44a3d2cde585c687d1db";
const getMoviesGenre = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`;
    let reponse = await fetch(apiUrl, { method: "GET" });
    let data = await reponse.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getFaveMovie = async () => {
  try {
    const imdbID = "tt0398286"; //tangled
    const apiUrl = `https://api.themoviedb.org/3/find/${imdbID}?api_key=${API_KEY}&language=en-US&external_source=imdb_id`;
    let response = await fetch(apiUrl, { method: "GET" });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedMovies = async () => {
  try {
    const apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&&page=1`;
    let response = await fetch(apiUrl, { method: "GET" });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedbyGenre = async () => {
  try {
    const genreID = 28;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=${genreID}`;
    let response = await fetch(apiUrl, { method: "GET" });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getTopRatedbyYear = async () => {
  try {
    const yearRelease = ;
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&primary_release_year
=1975    `;
    let response = await fetch(apiUrl, { method: "GET" });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};