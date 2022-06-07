import React from 'react'
import PictureCard from './PictureCard';


const viewFullDistribution = () =>
{
    
}

const addToMyList = () => {
    
}

function Card({ datas, credits })
{
    const genres = datas.genres.map((genre) => genre.name + ', ');
    const cast = credits.sort((a, b) => a.order - b.order);
    return (
    <div className="card-container">
            <div className="title text-center py-2">
                {/* TITLE */}
            <span className='text-2xl'>{datas.title}</span></div>
            <div className="header-bg flex flex-col md:flex-row gap-10" style={{ backgroundImage:`url('${process.env.REACT_APP_MDB_PICTURE_1920}${datas.backdrop_path}')` }}>
                {/* HEADER */}
                <div className="header-container flex flex-wrap justify-center gap-5 align-strech mt-5 w-3/4">
                    <div className="header-poster w-30 md:w-64 text-center h-96 ">
                        <figure>
                            <img src={`${process.env.REACT_APP_MDB_POSTER_PATH}${datas.poster_path}`} alt={ datas.title }  />
                        </figure>
                    </div>
                    <div className="header-datas w-40 flex flex-col justify-around ">
                        <p>
                            <span className='text-def'>Année : </span><span>{ datas.release_date.slice(0,4) }</span>
                        </p>
                        <p className='pt-3'>
                                <span className='text-def block'>Genre : </span>   
                                <span className='block'>{genres}</span>    
                        </p>
                        <p className='pt-3'>
                                <span className='text-def'>Durée : </span><span>{ datas.runtime } min</span>
                        </p>    
                        <p className=''>
                            <button className='btn bg-transparent border-2 border-cyan-300 rounded-xl text-gray-100 hover:bg-cyan-300 hover:text-gray-800' onClick={() => viewFullDistribution(datas.id)}><span className='p-1'>Fiche complète</span></button>
                        </p>
                    </div> 
                </div>
                {/* OPTIONS */}
                <div className="pt-3 flex gap-3 justify-center md:flex-col ">
                    <button className='text-def  bg-green-600 text-white w-10 h-10 rounded-full' onClick={addToMyList} >+</button>
                    <button className='text-def  bg-orange-600 text-white w-10 h-10 rounded-full' onClick={addToMyList} >-</button>
                </div>
                {/* SYNOPSIS */}
                <div className="synopsis pt-5 w-11/12 mx-auto grow ">
                    <p className='text-2xl'>Synopsis</p>
                    <p className='font-light'>
                        {datas.overview}
                    </p>
                </div>
            </div>
            {/* ACTORS */}
            <div className="actor pt-5 relative mb-5">
                <p className='text-2xl w-11/12 mx-auto h-max'>Acteurs</p>
                <div className="actor-container relative  overflow-x-auto w-11/12 mx-auto mt-5">
                    <div className="actor-list flex w-max  gap-3 mb-5 " >
                    {cast.map(actor => (
                        <div key={actor.id} className="card flex flex-col w-1/4  justify-start items-center ">     
                            <div className=" flex flex-col ">
                                <PictureCard picture={actor.profile_path} alt={actor.name} />
                                <div className="card-body  text-center w-4/4  bg-cyan-800  flex flex-col justify-center">
                                    <p><span className="font-bold">{ actor.name }</span></p>
                                    <p><span className="text-light text-sm">{ actor.character }</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            
    </div>
  )
}

export default Card