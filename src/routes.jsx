import {BrowserRouter, Routes, Route} from "react-router-dom";
<<<<<<< HEAD
import Header from "./components/Header";
import Home from "./pages/Home";
=======
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";
>>>>>>> feat/home-page

function RoutesApp() {
    
    return(
        <BrowserRouter>
<<<<<<< HEAD
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
=======
            <Nav className="nav-bar"/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="product/:id" element={<ProductDetails/>}/>
            </Routes>

            <Footer/>
>>>>>>> feat/home-page
        </BrowserRouter>
    )
}

export default RoutesApp;