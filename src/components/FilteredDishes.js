// importing react hooks
import React,{ useState,useContext,useEffect } from 'react';

// importing food items form cardDis
import CardDish from './CardDish';

// importing pagination componenet form pagination
import Pagination from './Pagination';

// importing global context
import { AllMenuContext } from './AllMenuContext';


function FilteredDishes(props) {

    // creating a state to store and display food items
    let [menuCategory, setMenuCategory] = useState([]);
    
    // creating a state to show a single dishs
    let [singleDish, setSingleDish] = useState([]);

    // set all menu item to allmenu context
    const allMenus = useContext(AllMenuContext)

    // setting a category wised meals 
    let [filteredDishes, setFilteredDishes] = useState([]);

    // set a active state to user clicked items 
    let [activeDish, setActiveDish] = useState("Chicken");

    // set pagination to 
    let [currentPage, setCurrentPage] = useState(1);

    // set how many meals will be show to row 
    let [itemsPerPage, setItemsPerPage] = useState(4);

    // calculating how many items to be showed on one time
    let indexOfLastDish = currentPage * itemsPerPage;
    let indexOfFirstDish = indexOfLastDish - itemsPerPage;
    // end pgination

    // arrange pagination to the items
    let showTheseDishesNow = filteredDishes.slice(indexOfFirstDish,indexOfLastDish)


    // get all the category list
    async function getAllTheCategories(abortController) {
      const API_URl = "https://www.themealdb.com/api/json/v1/1/categories.php";
        let response = await fetch(API_URl, { signal: abortController.signal });
      let categoryData = await response.json();
      setMenuCategory(categoryData.categories);
    }
  
    // fetch category wised food meals by calling an Api
    async function getOnlyOneDish(abortController) {
      const API_URl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert";
        let response = await fetch(API_URl, { signal: abortController.signal });
      let singleDishData = await response.json();    
      setSingleDish(singleDishData.meals)
    }
  
    // useeffect hoooks
    useEffect(() => { 
        const categoriesAbortController = new AbortController();
        const dishesAbortController = new AbortController();
        getAllTheCategories(categoriesAbortController);
        getOnlyOneDish(dishesAbortController);
        return () => {
            categoriesAbortController.abort();
            dishesAbortController.abort();
        };
    }, []);

    // show only single dishes
    let maxItem = 4;
    let singleDishItems = singleDish.map((item, index) => {
        if(index < maxItem){
            return(
                <li className='small'>
                        <img src={item.strMealThumb} className="br-10" alt="ph" />
                        <h6>{item.strMeal}</h6>
                </li>
            )
        }
      
    })

    // show category wised dishes on click
    function showFilterdDishesHandler(category){
        setSingleDish([])
        setActiveDish(category)
        let filteredDishesAre = allMenus.filter((item)=>{
            return item.strCategory === category
        }).map((menuItem)=>{
            return(
                <CardDish menuItem={menuItem}/>
            )
        })
        setFilteredDishes(filteredDishesAre)
    }
    
   // shpw the all categories
   let allCategories = menuCategory.map((item) => {
      return(
        <li className={item.strCategory === activeDish ? "active" : ""} onClick={()=>{showFilterdDishesHandler(item.strCategory)}}>{item.strCategory}</li>
      )
   })
  return (
    // category wised food meals component
    <div className='filtred-dishes'>
        <div className="container">
            <div className="text-center">
                <h2>Choose your dishes</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, beatae maiores, dolor illo reprehenderit voluptatem officiis voluptates consequuntur repudiandae nesciunt architecto, tempore tempora recusandae error. Iste quam distinctio ipsa expedita.</p>
            </div>
            <div className="filterd-dishes">
                {/* show all category */}
                <ul>{allCategories}</ul>
            </div>
            <div className="filtered-dishes-result">
                <ul className='flex flex-wrap '>
                    {/* click the paricular food meals and show that single item only */}
                    {singleDishItems}

                    {/* showTheseDishesNow */}
                    {singleDishItems !=0 || filteredDishes.length !==0 ? showTheseDishesNow :  
                    <div className='alert'>
                        <h3>sorry no items found</h3>
                        <h4>please try another dishes</h4>
                    </div>
                    }
                   
                </ul>
            </div>
    
            {/* seting the pagination component */}
            <Pagination filteredDishes={filteredDishes} 
            itemsPerPage={itemsPerPage} 
            currentPage={currentPage} 
            setCurrentPage={setCurrentPage}/>
        </div>
    </div>
  )
}

export default FilteredDishes