import {Link, Outlet} from "react-router-dom";

const Youtube = () => {
    return (
        <div>
            <header>
                <h1>Youtube</h1>
                <Link to="/youtube/about">About us</Link>
                <Link to="/youtube/process">Process</Link>
                <Link to="/youtube/creators">Creators</Link>
                <Link to="/youtube/clients_partners">Clients and Partners</Link>
                <Link to="/youtube/contact">Contact</Link>
            </header>
            <main>
            <Outlet/>
            </main>
        </div>
    );
};

export default Youtube;