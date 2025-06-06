import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function RoutesApp() {
    
    return(
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    )
}

export default RoutesApp;