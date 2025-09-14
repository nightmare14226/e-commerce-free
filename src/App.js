import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart/Cart";
import Title from "./components/Title/Title";
import Checkout from "./pages/Checkout/Checkout";
import Minicart from "./components/Minicart/Minicart";
import Listing from "./pages/Listing/Listing";
import Carousel from "./components/Carousel/Carousel";

import Category from "./components/Category/Category";
import Gridimage from "./components/Gridimage/Gridimage";
import {BrowserRouter} from "react-router-dom";
import Pages from "./pages/Pages/pages";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      
      <Header />
    
      <Pages />
      
      <Footer />
      
      </BrowserRouter>
    </div>
  );
}

export default App;
