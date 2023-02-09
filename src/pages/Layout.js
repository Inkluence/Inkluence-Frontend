import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <h1>홈</h1>
            <p>가장 먼저 보여지는 페이지입니다.</p>
            <ul>
                <li>
                    <Link to="/youtube">Youtube</Link>
                </li>
                <li>
                    <Link to="/instagram">Instagram</Link>
                </li>
                <li>
                    <Link to="/model">Model</Link>
                </li>
            </ul>
        </div>

    );
};

export default Layout;