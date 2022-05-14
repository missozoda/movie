let elMovieList = $(".movie-list");
let movie = kinolar.splice(1, 100)

movie.forEach(function(kino){
  let newLi = createElement("li", "col-3 border border-2 border-success my-3 p-2");
  let newpTitle = createElement("p","title", `Title: ${kino.title}`);
  let newPYear = createElement("p", "year", `Year: ${kino.year}`);
  let newPCast = createElement("p", "cast", `Cast: ${kino.cast.join(", ")}`);
  let newPGenres = createElement("p", "genres", `Genres: ${kino.genres.join(", ")}`);

  newLi.append(newpTitle, newPYear, newPCast, newPGenres);
  elMovieList.append(newLi);
})