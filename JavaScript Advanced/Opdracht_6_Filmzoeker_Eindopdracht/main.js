// maps array, create new elements, sets the movie.poster as image and links to imdb
const addMoviesToDom = (array) => {
  const movieList = document.getElementById("list-of-movies");
  movieList.querySelectorAll("*").forEach((movie) => movie.remove()); //removes all movies before creating new array
  array.map((movie) => {
    const imdbSite = "https://www.imdb.com/title/";
    const newLi = document.createElement("li");
    const newAhref = document.createElement("a");
    const newImg = document.createElement("img");
    movieList.appendChild(newLi);
    newLi.appendChild(newAhref);
    newAhref.appendChild(newImg);
    newImg.setAttribute("src", movie.Poster);
    newAhref.setAttribute("href", imdbSite.concat(movie.imdbID));
    newAhref.setAttribute("target", "_blank");
    newImg.classList.add("animation");
  });
};

const newerThan2014 = movies.filter((movie) => movie.Year >= 2014);
addMoviesToDom(movies); //shows all movies on pageload

const filteredMovies = (search) =>
  movies.filter((movie) =>
    movie.Title.toLowerCase().includes(search.toLowerCase())
  );

//Button selector filter START
filterBtn = document.querySelectorAll(".btn-name");
// waarom maakt volgorde van else if statements hier uit???
filterBtn.forEach((button) => {
  button.addEventListener("change", (event) => {
    let filterName = event.target.value;

    if (filterName === "allmovies") {
      addMoviesToDom(movies);
    } else if (filterName === "latest") {
      addMoviesToDom(newerThan2014);
    } else if (filterName === filterName) {
      addMoviesToDom(filteredMovies(filterName));
    }
  });
});
//Button selector filter END

//Searchbar

const searchBar = document.querySelector("#movie-search-bar");
const getMovieBySearch = () => {
  const searchValue = searchBar.value;
  addMoviesToDom(filteredMovies(searchValue));
};

searchBar.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    getMovieBySearch();
  }
});

// console.log("main.js is geladen")
