import {Route} from "react-router-dom";
import DashBoard from "../pages/admin/DashBoard";
import Login from "../pages/admin/Login";
import Influencers from "../pages/admin/Influencers";


const AdminRoutes = (
    <>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin" >
            <Route path="dashboard" element={<DashBoard/>}/>
            <Route path="influencers" element={<Influencers/>}/>
.        </Route>
    </>
);

export default AdminRoutes;
