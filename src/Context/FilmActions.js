export const getFilms = async (film) => {
    let query = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MDB_API3}&language=fr&query=${film}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    });
    const films = await query.json();
    return films.results;
}

export const getGenre = async () =>
{
    const query = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_MDB_API3}&language=fr`, {
        method: "GET"
    })
    const genres = await query.json();
    return genres.genres;
}