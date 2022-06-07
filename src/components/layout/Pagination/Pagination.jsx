import React from 'react'
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import "./Pagination.css";



function Pagination({ currentPage,lastPage,getFilms,handleSubmit,setCurrentPage })
{
 

    const range = (start, end) => {
        let length = end - start + 1;
        return Array.from({length},  (_,idx) => idx + start);
    }                       
    
    const limitPage = 2 ; //num of pagination by side
    const maxLeft = Math.max(currentPage-limitPage, 1); // min of pages
    const maxRight = Math.min(currentPage+limitPage, lastPage); // max of pages
    const showDotsLeft = maxLeft > 2;
    const showDotsRight = maxRight < lastPage - 2;



    const arr = range(maxLeft,maxRight);
   
    
return (
    <div className='pagination-container flex flex-rows items-center justify-center'>        
            {/* display first pafe if we are above the limitation pagination by side+1 */}
        {currentPage>limitPage+1 &&
        <>            
            <div className='pagination-item   w-10 h-10 flex justify-center items-center' onClick={(e) => handleSubmit(e, 1)}>
                <span>1</span>
            </div>
            {/* if we have enought page we substract page 10 by 10 */}
            {currentPage-10>1
                ?
                <>
                    <div className='pagination-item flex  w-10 h-10 justify-center items-center' onClick={(e) => handleSubmit(e, currentPage - 10)}>
                        <span className="pagination-prev">-10</span>
                    </div>
                </>
                :
                // or 2 by 2
                <>
                    <div className='pagination-item  w-10 h-10 flex justify-center items-center' onClick={(e) => handleSubmit(e, currentPage - 2)}>
                        <span className="pagination-prev">-2</span>
                    </div>
                </>
            }
        </>
        }
        {arr.map((elem) =>
        (   
            <div key={elem} className={`pagination-item  w-10 h-10 flex justify-center items-center ${elem === currentPage ? 'active' : ''} `} onClick={(e) => handleSubmit(e,elem)}>
                <span >{elem}</span>
            </div>
                ))
        }
        {
            currentPage<lastPage-1 &&
            <>
                {currentPage + 10 < lastPage - 1
                    ?
                    <>
                    <div className='pagination-item  w-10 h-10 flex justify-center items-center' onClick={(e) => handleSubmit(e, currentPage + 10)}>
                        <span className="pagination-next">+10</span>
                    </div>
                    </>
                    :
                    <>
                    <div className='pagination-item  w-10 h-10 flex justify-center items-center' onClick={(e) => handleSubmit(e, currentPage + 2)}>
                        <span className="pagination-next">+2</span>
                    </div>
                    </>
                }
                <div className='pagination-item  w-10 h-10 flex justify-center items-center' onClick={(e) => handleSubmit(e, lastPage)}>
                    <span className=''>{lastPage}</span>
                </div>
            </>

        }
        
    </div>
)
}

export default Pagination