export const searchFilms = async (film,page=1) => {
    let query = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MDB_API3}&language=fr&query=${film}&page=${page}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const films = await query.json();
     console.log(films);
    return films;
}

export const getFilm = async (movie_id) =>
{
    let query = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_MDB_API3}&language=fr`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const film = await query.json();
    return film;
}
export const getCredits = async (movie_id) =>
{
    let query = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${process.env.REACT_APP_MDB_API3}&language=fr`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const credits = await query.json();
    return credits;
}



export const getGenre = async () =>
{
    const query = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MDB_API3}&language=fr`, {
        method: "GET"
    })
    const genres = await query.json();
    return genres.genres;
}