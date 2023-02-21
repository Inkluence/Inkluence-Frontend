import {Route} from "react-router-dom";
import DashBoard from "../pages/admin/DashBoard";
import Login from "../pages/admin/Login";
import Influencers from "../pages/admin/Influencers";
import InquiryList from "../pages/admin/InquiryList";
import InquiryDetails from "../pages/admin/InquiryDetails";


const AdminRoutes = (
    <>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin" >
            <Route path="dashboard" element={<DashBoard/>}/>
            <Route path="influencers" element={<Influencers/>}/>
            <Route path="inquiry" element={<InquiryList/>}/>
            <Route path="inquiry/:id" element={<InquiryDetails/>} />
.        </Route>
    </>
);

export default AdminRoutes;
