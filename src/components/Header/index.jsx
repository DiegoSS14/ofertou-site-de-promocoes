import { Link } from "react-router-dom";
import "./header.css";
import Search from "../search";
import logoNegativa from "../../assets/logo/ofertou-logo-negativo.svg";

function Header() {
    return(
        <div className="container">
            <div className="items">
                <img src={logoNegativa} className="logo"
                alt='símbolo da marca e nome "Ofertou"' />

                <div className="menu">
                    <Link>Home</Link>
                    <Link>List</Link>
                    <Link>Favorites</Link>
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Header;