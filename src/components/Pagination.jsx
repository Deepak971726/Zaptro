import React, { useEffect } from "react";

const Pagination = ({ totalPost, postPerPage, currentPage, setCurrentPage }) => {
    
    let pages=[]
    
    for(let i=1; i<=Math.ceil(totalPost/postPerPage); i++){
        pages.push(i)
        // console.log(TotalPages  )
    }
    // useEffect(()=>{
    //     console.log("TotalPost: ",totalPost, "postPerPage: ", postPerPage)
    // })
    
    // useEffect(()=>{
    //     console.log(object)
    // },[])
    
  return (
    <div className="flex justify-center items-center gap-2 mt-6">

      {/* Previous Button */}
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-3 py-2 rounded-md border text-sm font-medium transition
          ${
            currentPage === 1
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          }
        `}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 rounded-md border text-sm font-medium transition
            ${
              currentPage === page
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === pages.length}
        className={`px-3 py-2 rounded-md border text-sm font-medium transition
          ${
            currentPage === pages.length
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-700 hover:bg-blue-500 hover:text-white"
          }
        `}
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
