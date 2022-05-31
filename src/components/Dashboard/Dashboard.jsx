import React, { useEffect,useContext} from 'react'
import FilmContext from '../../Context/FilmContext'

function Dashboard()
{

  const context = useContext(FilmContext);
  const { setFilmState } = context;

  useEffect(() =>
  {
    setFilmState({type:'RESET_SEARCH'})
  },[])

  return (
    <div>dashboard</div>
  )
}

export default Dashboard