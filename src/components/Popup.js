// creating a popup component
import React,{useContext} from 'react';

// importing all menu context here
import { AllMenuContext } from './AllMenuContext';

// destructuring props
function Popup({closePopUp, currentDish, allDishes,addToCartHandler}) {

    // using all menu context
    const allMenus = useContext(AllMenuContext);

    // displaying all menu items
    let dishDetails = allMenus.filter((menuItem)=>{
        return menuItem.strMeal == currentDish
    }).map((item)=>{
        return(
            <div className='popup-content-data'>
                <div className='popup-header'>
                    
                    {/* dish imgae */}
                    <img src={item.strMealThumb} alt="" />
                    {/* dish category name */}
                    <h5 className='popup-header-category'>
                        {item.strCategory}
                    </h5>
                </div>
                <h2>{item.strMeal}</h2>
                <p className='item-instraction'>{item.strInstructions}</p>
                <ul className='dish-ingrediants flex'>
                    {/* list incrediants */}
                    <li>{item.strIngredient1}</li>
                    <li>{item.strIngredient2}</li>
                    <li>{item.strIngredient3}</li>
                    <li>{item.strIngredient4}</li>
                </ul>
                {/* set add to cart button */}
                <button onClick={()=>addToCartHandler(item.strMealThumb,item.strMeal)} className='btn'>order now</button>
                <h5 className='close' onClick={closePopUp}>Close</h5>
            </div>
        )
    })

  return (
    <div className='popup'>
        <div className="popup-content">
            {/* displaying all menus */}
            {dishDetails}
            
        </div>
    </div>
  )
}

export default Popup