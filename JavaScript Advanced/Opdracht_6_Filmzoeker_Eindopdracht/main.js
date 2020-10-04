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
    // newImg.classList.add("poster-display")
    newImg.classList.add("animation");
  });
};

//shows all movies on pageload
addMoviesToDom(movies);

//shows movies by filteredname
const filteredMovies = (search) =>
  movies.filter((movie) =>
    movie.Title.toLowerCase().includes(search.toLowerCase())
  );

// waarom maakt volgorde van else if statements hier uit???
const newerThan2014 = movies.filter((movie) => movie.Year >= 2014);
const filterBtn = document.querySelectorAll(".btn-name");
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

//  load wait animation
let disableAnimation = () => {
  const loadAnimation = document.querySelector("#load-page");
  loadAnimation.classList.remove("load-page");
};

filterBtn.forEach((button) => {
  button.addEventListener("change", () => {
    const loadAnimation = document.querySelector("#load-page");
    loadAnimation.classList.add("load-page");
    setTimeout(disableAnimation, 500);
  });
});
//  load wait animation

//Searchbar

const searchBar = document.querySelector("#movie-search-bar");
const getMovieBySearch = () => {
  const searchValue = searchBar.value;
  addMoviesToDom(filteredMovies(searchValue));
};

searchBar.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    const loadAnimation = document.querySelector("#load-page");
    loadAnimation.classList.add("load-page");
    setTimeout(disableAnimation, 500);
    getMovieBySearch();
  }
});

// console.log("main.js is geladen")
