import { Link } from "react-router-dom";
import "./nav.css";
import Search from "../Search/index.jsx";
import logoNegativa from "../../assets/logo/ofertou-logo-negativo.svg";

function Nav({ className }) {
    return(
        <div className={`container-nav ${className}`}>
            <div className="items">
                <Link to="/">
                    <img src={logoNegativa} className="logo"
                    alt='símbolo da marca e nome "Ofertou"' />
                </Link>

                <div className="menu">
                    <Link to="/">Home</Link>
                    <Link to="favorites">Favorites</Link>
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Nav;