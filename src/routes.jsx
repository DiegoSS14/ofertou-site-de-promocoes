import {BrowserRouter, Routes, Route} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";

function RoutesApp() {
    
    return(
        <BrowserRouter>
            <Nav className="nav-bar"/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="product/:id" element={<ProductDetails/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;