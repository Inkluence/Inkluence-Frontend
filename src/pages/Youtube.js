import {Link, Outlet} from "react-router-dom";
import NavBar from "../components/youtube/NavBar";
import "../assets/scss/youtube.scss";
import AboutUs from "./common/AboutUs";
import Process from "./youtube/Process";
import Creators from "./youtube/Creators";
import ClientsnPartners from "./common/ClientsnPartners";
import ContactUs from "./common/ContactUs";

const Youtube = () => {
    return (
        <div id="youtube">
            <header className="fixed-top">
                <NavBar/>
            </header>
            <div>
            <AboutUs/>
                <Process/>
                <Creators/>
                <ClientsnPartners/>
                <ContactUs/>
            </div>
        </div>
    );
};

export default Youtube;