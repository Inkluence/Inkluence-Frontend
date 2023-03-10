import {Nav} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import Logo from "../../assets/img/logo_white.png";

const NavBar =() => {
    const navigate = useNavigate();

    const onLogout = () => {
        sessionStorage.removeItem('username')
        navigate('/admin')
    }

    return (
        <Nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
            <a className="navbar-brand col-sm-3 col-md-2 mr-0 px-3" href="/">
                <img src={Logo} width="30" height="30" alt=""/>
            </a>
            {/*<input className="form-control form-control-dark w-100" type="text" placeholder="Search"*/}
            {/*       aria-label="Search"/>*/}
            <ul className="navbar-nav px-3">
                <li className="nav-item text-nowrap">
                    <a className="nav-link" onClick={onLogout}>Log out</a>
                </li>
            </ul>
        </Nav>
    );
}

export default NavBar;