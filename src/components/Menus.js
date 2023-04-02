// creating a menu component its the main parent component

// importing hero component
import Hero from "./Hero";

// importing specialdishes menu compont 
import SpecialDishes from "./SpecialDishes";

// importing filterdishes form filtereddishes
import FilteredDishes from "./FilteredDishes";

// importing all menu context its a global context used for serve data into many pages
import { AllMenus } from "./AllMenuContext";


function Menus() {
  return (
    <div>
      {/* hero component */}
        <Hero />    
        {/* all menu context */}
         <AllMenus>
              <SpecialDishes />
              <FilteredDishes />
        </AllMenus>  
    </div>   
  );
}
export default Menus;
