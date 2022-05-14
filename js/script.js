let elMovieList = $(".movie-list");

kinolar.forEach(function(kino){
  let newLi = createElement("li", "col-3 border-2 border-dark my-3 p-2");
  let newpTitle = createElement("p","title", kino.title);
  let newPYear = createElement("p", "year", kino.year);
  let newPCast = createElement("p", "cast", kino.cast.join(", "));
  let newPGenres = createElement("p", "genres", kino.genres.join(", "));

  newLi.append(newpTitle, newPYear, newPCast, newPGenres);
  elMovieList.append(newLi);
})