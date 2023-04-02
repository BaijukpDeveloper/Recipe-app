// creating special menu component

// importing useState and useContext 
import React, {useState, useContext} from "react";

// importing card component
import CardDish from "./CardDish";

// importing popup menu component
import Popup from "./Popup";

// importing add to card component
import AddToCart from "./AddToCart";

// importing all menu context 
import { AllMenuContext } from "./AllMenuContext";


function SpecialDishes(props){

    // creating a state to handle popup
    let [showPopUp, setShowPopUp] = useState(false);

    // creating a state to handle currnetdish to store
    let [currentDish, setCurrentDish] = useState('');

    // creating a state to handle cart item to be add
    let [addToCartItem, setAddToCartItem] = useState([]);


    // using all menu context
    const allMenus = useContext(AllMenuContext);

    // function for show popup
    function showPopupHandler(dishName){
        setShowPopUp(true);
        setCurrentDish(dishName)
    }

    // function foe closing the popup menu
    function closePopUpHandler(){
        setShowPopUp(false)
    }

    // add to cart handler
    function addToCartHandler(addToCartImg,addToCartTitle){
        setAddToCartItem([
            ...addToCartItem,
            {
                "img": addToCartImg,
                "title": addToCartTitle
            }
        ])
        
    }


    // set a maximum dishs to show on the page
    let maxSpecialDishes = 8 ;

    let specialMenus = allMenus.map((menuItem, index) => {
        if(index < maxSpecialDishes){
            return(
                <CardDish menuItem={menuItem}
                    showPopUp={showPopupHandler}/>
            )
        }
        
    })
    return(
        <section className="special-dishes">
            {/* seting popup compontent */}
            {showPopUp && <Popup closePopUp={closePopUpHandler} currentDish={currentDish} addToCartHandler={addToCartHandler}/>}
            
            <div className="container">
                <AddToCart addToCartItem={addToCartItem}/>
                <div className="special-dishes-content text-center">
                    <h2>Our special Dishes</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis inventore esse, cumque iure exercitationem rerum laborum? Officia, explicabo quo ab doloribus recusandae expedita iusto, qui ipsam, enim aliquam velit iste!</p>
                </div>
                <div className="special-dishes-list">
                    {/* displaying menu items */}
                    <ul className="flex flex-wrap gap-30">{specialMenus}</ul>
                </div>
            </div>
        </section>
    )
}

export default SpecialDishes