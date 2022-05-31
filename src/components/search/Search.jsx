import React,{useContext, useRef} from 'react'
import FilmContext from '../../Context/FilmContext'
import { getFilms } from '../../Context/FilmActions';
import noPic from '../../assets/images/no-pic.jpg';

function Search()
{
  const context = useContext(FilmContext);
  const { setFilmState,filmState} = context;

  const keyWord = useRef();



  const handleSubmit = (e) =>
  {
    e.preventDefault();
    const term = keyWord.current.value;
    const resFilms = getFilms(term)
      .then(results => setFilmState({ type:'SET_SEARCH', payload:results })); 
  }



    return (
      <>
        
        <div className="search-Container w-full  bg-red-500">
          <form method="post" className="text-center p-3" onSubmit={ (e)=>handleSubmit(e) }>
            <input type="text" className="rounded w-9/12 text-black text-center" name="keyWord" ref={keyWord} placeholder="entrez le titre recherché !" />
            <button className='btn btn-info ml-3 w-10 h-10 rounded-full hover:bg-cyan-100' >Go</button>
          </form>
        </div>
        {/*  DISPLAY RESULT */}
        <div className="display-result w-full flex flex-wrap ">
          {filmState.searchResult.map(elem =>
          (
            <div className="card w-1/2 p-3 object-cover overflow-y-hidden " key={elem.id} style={{height:'30vh'}}>
              <figure>
                <img className='' src={`${elem.poster_path !== null ? process.env.REACT_APP_MDB_POSTER_PATH + elem.poster_path : noPic }`} alt={elem.title} />                </figure>
            </div>
          ))
          }
        </div>
           
      </>
  )
}

export default Search