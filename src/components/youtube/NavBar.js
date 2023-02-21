import {Nav, NavLink} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import Logo from "../../assets/img/logo_white.png"
import {useEffect} from "react";
import GoogleButton from "../elements/GoogleButton";
const NavBar =() => {
    const navigate = useNavigate();

    const onLogout = () => {
        sessionStorage.removeItem('username')
        navigate('/admin')
    }



    return (
        <Nav id="navbar-youtube" className="navbar navbar-expand-lg navbar-dark justify-content-between">
            <a className="navbar-brand" href="/">
                <img src={Logo} width="30" height="30" alt=""/>
            </a>
            <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <Nav className="navbar-nav" id="myDIV">
                    <a href="#about" className="nav-item nav-link active">About us</a>
                    <a href="#process" className="nav-item nav-link active" >Process</a>
                    <a href="#creators" className="nav-item nav-link active">Creators</a>
                    <a href="#clients_partners" className="nav-item nav-link active">Clients and Partners</a>
                    <a href="#contact" className="nav-item nav-link active">Contact</a>
                    {/*<GoogleButton />*/}

                    {/*<Link to="/youtube/about" className="nav-item nav-link">About us</Link>*/}
                    {/*<Link to="/youtube/process" className="nav-item nav-link">Process</Link>*/}
                    {/*<Link to="/youtube/creators" className="nav-item nav-link">Creators</Link>*/}
                    {/*<Link to="/youtube/clients_partners" className="nav-item nav-link">Clients and Partners</Link>*/}
                    {/*<Link to="/youtube/contact" className="nav-item nav-link">Contact</Link>*/}
                </Nav>
            </div>
            </div>


        </Nav>


    );
}

export default NavBar;