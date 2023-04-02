// importing menu component from component its the main component
import Menus from './components/Menus';

// importinf css file
import './App.css';

// importing checkout component
import Checkout from "./components/Checkout";

// importing header section from component
import Header from "./components/Header";

// importing basic routing components form react-router-dom library
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App"> 
     {/*rendring  header comonet  */}
    <Header />
    {/* set basci routing  */}
    <Routes>
      {/* set the routing path */}
      <Route path="/" element={<Menus/>} />
      <Route path="checkout" element={<Checkout/>} />  
    </Routes> 
    </div>
  );
}

export default App;
