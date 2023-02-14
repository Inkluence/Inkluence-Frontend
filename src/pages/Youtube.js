import NavBar from "../components/youtube/NavBar";
import "../assets/scss/youtube.scss";
import AboutUs from "./common/AboutUs";
import Process from "./youtube/Process";
import Creators from "./youtube/Creators";
import ClientsnPartners from "./common/ClientsnPartners";
import ContactUs from "./common/ContactUs";
import {Button, Row} from "react-bootstrap";
import {useState} from "react";
import InquiryModal from "../components/youtube/InquiryModal";
import { ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Youtube = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <div id="youtube">
            <header className="fixed-top">
                <NavBar/>
            </header>
            <div>
                <ToastContainer className="mr-3 mt-3"/>
                <AboutUs/>
                <Process/>
                <Creators/>
                <ClientsnPartners/>
                <ContactUs/>
                <Row className="inquiry-button"> <Button onClick={() => setModalShow(true)}>문의하기</Button>{' '}</Row>
            </div>
            <InquiryModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    );
};

export default Youtube;