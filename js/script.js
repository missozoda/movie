let elMovieList = $(".movie-list");

kinolar.forEach(function(kino){
  let newLi = createElement("li", "col-4 border-2 border-success my-3 p-2");
  let newpTitle = createElement("p","title", kino.title);
  let newPYear = createElement("p", "year", kino.year);
  let newPCast = createElement("p", "cast", kino.cast);
  let newPGenres = createElement("p", "genres", kino.genres);

  newLi.append(newpTitle, newPYear, newPCast, newPGenres);
  elMovieList.append(newLi);
})