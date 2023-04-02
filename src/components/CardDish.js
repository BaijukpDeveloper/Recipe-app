import React from "react";

// items cards 
function CardDish(props) {    
  return (
    <li>
       
       {/* menu items click show a pop and show details on each food items */}
      <a href="javaScript;" onClick={()=>props.showPopUp(props.menuItem.strMeal)}>
        {/* food item image */}
        <img src={props.menuItem.strMealThumb} alt="imp" className="br-10" />
        {/* food item name */}
        <h4>{props.menuItem.strMeal}</h4>
      </a>
    </li>
  );
}

export default CardDish;
