import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getFilm,getCredits } from '../../Context/FilmActions';
import FilmContext from '../../Context/FilmContext';
import Spinner from '../layout/spinner/Spinner';
import Card from './Card';

function FilmCard()
{

    const { filmState,setFilmState } = useContext(FilmContext);
    const id = useParams().movie_id;
    let [filmDatas, setFilmDatas] = useState(null);
    const [credits, setCredits] = useState(null);
    let [loaded, setLoaded] = useState(false);
    


    useEffect(() =>
    {
        setFilmState({ type: 'SET_SPINNER', payload: true })
        getFilm(id)
            .then(result => setFilmDatas(result))
            .then(result => setLoaded(true));
        
        getCredits(id)
            .then(res => setCredits(res))
        setFilmState({ type: 'SET_SPINNER', payload: false })        
    },[setFilmState,id,setCredits,credits])    


    
    return (
        <div className="film-container"> 
            {filmState.animeSpin === true && <Spinner />}
            {loaded!==null && credits!==null &&
                <>
                <Card datas={filmDatas} credits={ credits.cast.slice(0,10) } />
                </>
            }
        </div>
  )
}

export default FilmCard