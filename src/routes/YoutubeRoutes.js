import {Route} from "react-router-dom";
import AboutUs from "../pages/common/AboutUs";
import Process from "../pages/youtube/Process";
import Creators from "../pages/youtube/Creators";
import ClientsnPartners from "../pages/common/ClientsnPartners";
import ContactUs from "../pages/common/ContactUs";

const YoutubeRoutes = (
    <>
        <Route index path="/youtube/about" element={<AboutUs/>}/>
        <Route path="/youtube/process" element={<Process/>}/>
        <Route path="/youtube/creators" element={<Creators/>}/>
        <Route path="/youtube/clients_partners" element={<ClientsnPartners/>}/>
        <Route path="/youtube/contact" element={<ContactUs/>}/>
    </>
);

export default YoutubeRoutes;
