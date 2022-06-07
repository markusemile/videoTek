import React,{useContext, useRef, useState} from 'react'
import FilmContext from '../../Context/FilmContext'
import { searchFilms } from '../../Context/FilmActions';
import noPic from '../../assets/images/no-pic.jpg';
import Pagination from '../layout/Pagination/Pagination';
import Spinner from '../layout/spinner/Spinner';
import {  useNavigate } from 'react-router-dom';

function Search()
{
  const context = useContext(FilmContext);
  const { setFilmState, filmState } = context;

  // local state
  const [lastPage, setLastPage] = useState();
  const [currentPage, setCurrentPage] = useState();
  const navigate = useNavigate();
  const keyWord = useRef();





  const handleSubmit = (e,page=1) =>
  {
    e.preventDefault();
    setFilmState({ type: 'SET_SPINNER', payload:true});
    const term = keyWord.current.value;
    const resFilms = searchFilms(term,page)
      .then(results =>
      {
        setFilmState({ type: 'SET_SEARCH', payload: results.results })
        setCurrentPage(results.page);
        setLastPage(results.total_pages)
        setFilmState({ type: 'SET_SPINNER', payload:false});
      });


  }


    return (
      <>
        {filmState.animeSpin===true &&
          // <div className="spinner-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Spinner />       
          // </div>
        }
        <div className="search-Container w-full  bg-red-500">
          <form method="post" className="text-center p-3" onSubmit={ (e)=>handleSubmit(e) }>
            <input type="text" className="rounded w-10/12 md:w-4/12 text-black text-center" name="keyWord" ref={keyWord} placeholder="entrez le titre recherché !" />
            <button className='btn btn-info ml-3 p-0 text-sm rounded-full text-gray-800 hover:bg-cyan-100' >Go</button>
          </form>
        </div>
       
        {/*  DISPLAY RESULT */}
        

        <div className="display-result w-full flex flex-wrap items-stretch mt-2 justify-center" >
          {filmState.searchResult.map(elem =>
          (
            <div className="card w-40 h-content p-1 m-1 bg-white flex flex-col justify-center" key={elem.id} id={elem.id} onClick={() => navigate(`/film/${elem.id}`)} >
              <figure>
                <img className='' src={`${elem.poster_path !== null ? process.env.REACT_APP_MDB_POSTER_PATH + elem.poster_path : noPic}`} alt={elem.title}/>
              </figure>
            </div>
          ))
          }
          
        </div>
           {/* PAGINATION  */}
        <div className="pagination-container mb-5">
          {
            lastPage !== undefined && <Pagination currentPage={currentPage} lastPage={lastPage} handleSubmit={handleSubmit} setCurrentPage={setCurrentPage} />
          }
        </div>
      </>
  )
}

export default Search