import FeatherIcon from 'feather-icons-react';
const SideBar = () => {
    return (
                    <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/admin/dashboard">
                                        <FeatherIcon icon="home" />
                                        Dashboard <span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FeatherIcon icon="users" />
                                        Customers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FeatherIcon icon="bar-chart-2" />
                                        Reports
                                    </a>
                                </li>

                            </ul>

                            <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span>Additional Menu</span>
                                <a className="d-flex align-items-center text-muted" href="#">
                                    <FeatherIcon icon="plus-circle" />
                                </a>
                            </h6>
                            <ul className="nav flex-column mb-2">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FeatherIcon icon="file-text" />
                                        Current month
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        <FeatherIcon icon="file-text" />
                                        Social engagement
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>

    );
}

export default SideBar;