import React from 'react'

function PictureCard({ picture,alt })
{
    const pic = picture !== 'facenull' ? picture : null; 
  return (
      <figure className=' flex w-content w-75 justify-center items-start'>
          {pic !== null
              ? <img src={`${process.env.REACT_APP_MDB_PICTURE_138}${picture}`} alt={alt} className=" object-fill bg-yellow-400 rounded-t-md " />
              : <img src={`${process.env.PUBLIC_URL}/picture/no-picture.png`} alt="nopicture"/>
          }
    </figure>
  )
}

export default PictureCard