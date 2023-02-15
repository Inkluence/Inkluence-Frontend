import FeatherIcon from 'feather-icons-react';
import {Link, useLocation} from "react-router-dom";
const SideBar = () => {
    const location = useLocation();

    const isMenuActive = (url) => {
        return location.pathname === url ? "active" : "";
    }

    return (
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <Link to="/admin/dashboard" className={`nav-link ${isMenuActive("/admin/dashboard")}`}>
                                <FeatherIcon icon="home" />
                                Dashboard
                                </Link>
                                <Link to="/admin/influencers" className={`nav-link ${isMenuActive("/admin/influencers")}`}>
                                    <FeatherIcon icon="users" />
                                    Influencers
                                </Link>
                                <Link to="/admin/inquiry" className={`nav-link ${isMenuActive("/admin/inquiry")}`}>
                                    <FeatherIcon icon="help-circle" />
                                    Inquiry
                                </Link>
                            </ul>
                            {/*<h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">*/}
                            {/*    <span>Additional Menu</span>*/}
                            {/*    <a className="d-flex align-items-center text-muted" href="#">*/}
                            {/*        <FeatherIcon icon="plus-circle" />*/}
                            {/*    </a>*/}
                            {/*</h6>*/}
                            {/*<ul className="nav flex-column mb-2">*/}
                            {/*    <li className="nav-item">*/}
                            {/*        <a className="nav-link" href="#">*/}
                            {/*            <FeatherIcon icon="file-text" />*/}
                            {/*            Current month*/}
                            {/*        </a>*/}
                            {/*    </li>*/}
                            {/*    <li className="nav-item">*/}
                            {/*        <a className="nav-link" href="#">*/}
                            {/*            <FeatherIcon icon="file-text" />*/}
                            {/*            Social engagement*/}
                            {/*        </a>*/}
                            {/*    </li>*/}
                            {/*</ul>*/}
                        </div>
                    </nav>

    );
}

export default SideBar;