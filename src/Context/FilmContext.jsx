import { createContext,useReducer,useEffect } from "react";
import { getGenre } from "./FilmActions";
import reducer from "./FilmsReducers";
const FilmContext = createContext();

export const FilmProvider = ({ children }) =>
{
    const initState = {
        films: [],
        genres:[],
        searchResult: [],
        animeSpin:false,
    }   

    const [filmState, setFilmState] = useReducer(reducer, initState);

    useEffect(() => {        
        const queryGenres = async () =>
        {
            const genres = await getGenre();
            setFilmState({ type: 'SET_GENRE', payload: genres });
        }
        queryGenres();

        
    
      
    }, [filmState.genres])
    
    
    return (
        <FilmContext.Provider value={{
            filmState,
            setFilmState
        }}>
            {children}
        </FilmContext.Provider>
    )
}
export default FilmContext;