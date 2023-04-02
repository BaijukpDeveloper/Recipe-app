// pageniation component
import React from "react";

function Pagination(props) {
    // define how many pages to be displayed on page
    let numberOfPages = [];
    for(let i=1;i<=Math.ceil(props.filteredDishes.length/props.itemsPerPage);i++){
        numberOfPages.push(i);
    }
    

    // define how many dishes is ot be displayed
    function showNextDishesHandler(event){
        let currentPage = event.target.id
        props.setCurrentPage(currentPage)
    }


    // definig the page id
    let pages = numberOfPages.map((pageNumber)=>{
        return(
            <li id={pageNumber} onClick={showNextDishesHandler}>{pageNumber}</li>
        )
    })
  return (
    // displaying the pages number
    <section>
    <ul className="pagination flex">
    {pages}
    </ul>
    </section>
    
  );
}

export default Pagination;
