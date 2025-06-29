import "./footer.css";
import logoNegativa from "../../assets/logo/ofertou-logo-negativo.svg";

function Footer() {
    return(
        <div className="container-footer">
            <div className="items">
                <img src={logoNegativa} className="logo"
                alt='símbolo da marca e nome "Ofertou"' />

                <span>Todos os direitos reservados</span>
            </div>
        </div>
    )
}

export default Footer;