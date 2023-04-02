// creating a global context to resue the component where to want 


// importing react hooks 
import React, { useState, useEffect} from "react";

// loader componet for showing a loader page 
import Loader from "./Loader";

// creating and exporting global context 
export const AllMenuContext = React.createContext();

export const AllMenus =(props)=>{    
    // creating  states
    let [menu, setMenu] = useState([]);
    let [loading, setLoading] = useState(false);


  // Get all the menus item from themealdb api fetch data from api 
  async function getAllTheMenus(abortController) {
    setLoading(true);
    const API_URl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
    let response = await fetch(API_URl, {signal: abortController.signal});
    let data = await response.json();
    setMenu(data.meals);
    setLoading(false);
  }
  
   // useeffect hoooks
   useEffect(() => {
    const abortController = new AbortController()
    getAllTheMenus(abortController);
    return () => abortController.abort()
  }, []);
    return(
      // rendring context menu
        <AllMenuContext.Provider value={menu}>

          {/* use a conditonal rendring for loader  */}
            {! loading ? props.children : <Loader/>}
        </AllMenuContext.Provider>
    )
}

