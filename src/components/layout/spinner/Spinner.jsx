import React from 'react'

function Spinner() {
  return (
    <div className="spinner-container absolute top-0 left-0  w-full h-full" style={{backgroundColor:"rgba(35, 41, 97,0.9)"}}>
      <div className="absolute spinner-text  top-96 left-1/2 ">loading...</div>
      <div className="spinner-position relative w-full h-full">
        <div className="absolute w-40 h-40 left-40 top-80
              border-8 
              border-t-amber-500 
              border-r-blue-500 
              border-b-rose-500 
              border-l-green-500 
              rounded-full 
              animate-spin">
        </div>
      </div>
      
      </div>
  )
}

export default Spinner