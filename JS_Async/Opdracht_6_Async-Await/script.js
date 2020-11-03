// const processData = async () => {
//   try {
//     let fetchedData = await getData();
//     console.log(fetchedData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// console.log(processData());
//opdarcht 1
const setMoviesGenre = async () => {
  try {
    let genreData = await getMoviesGenre();
    // console.log(genreData);
    genreData.genres.map((element) => {
      const genreList = document.querySelector("#genrelist");
      const genreListItem = document.createElement("li");
      genreList.appendChild(genreListItem);
      genreListItem.innerHTML = `${element.name},  ID: ${element.id}`;
    });
  } catch (error) {
    console.log(error);
  }
};

setMoviesGenre();

//opdarcht 2

const setFaveMovie = async () => {
  let faveMovieData = await getFaveMovie();
  console.log(faveMovieData.movie_results);
  console.log(faveMovieData.movie_results[0].title);
  const newH1 = document.getElementById("favemovie");
  newH1.innerHTML = faveMovieData.movie_results[0].title;
};

setFaveMovie();

//opdracht 3 top rated movies

const setTopRatedMovies = async () => {
  try {
    const topRated = document.getElementById("toprated");
    const data = await getTopRatedMovies();
    const topTen = data.results.splice(0, 10);
    topTen.forEach((movie) => {
      const newLi = document.createElement("li");
      topRated.appendChild(newLi);
      newLi.innerHTML = `Title: ${movie.title} Score: ${movie.vote_average} `;
    });
  } catch (error) {
    console.log(error);
  }
};

setTopRatedMovies();

//opdracht 4
const setTopRatedByGenre = async () => {
  const data = await getTopRatedbyGenre();
  // console.log(data);
  const topRatedyGenreList = document.getElementById("topratedbygenre");
  genreList = data.results.splice(0, 10);

  genreList.forEach((movie) => {
    const newLi = document.createElement("li");
    topRatedyGenreList.appendChild(newLi);
    newLi.innerHTML = `Title: ${movie.title}, Score: ${movie.vote_average}`
  });
};

setTopRatedByGenre();

// opdracht 5 rated by year 1975

const setTopRatedbyYear = async () => {
  const data = await getTopRatedbyYear();
  console.log(data, "logt data");
  const topRatedbyYear = document.getElementById("topratedbyyear")
  yearList = data.results.splice(0, 10);

  yearList.forEach(movie => {
    const newLi = document.createElement("li");
    topRatedbyYear.appendChild(newLi);
    newLi.innerHTML = `Title: ${movie.title}, Score: ${movie.vote_average},   Releasedate: ${movie.release_date}`
  });

}

setTopRatedbyYear();



// Deel 2