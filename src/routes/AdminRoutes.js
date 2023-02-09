import {Route} from "react-router-dom";
import DashBoard from "../pages/admin/DashBoard";
import Login from "../pages/admin/Login";


const AdminRoutes = (
    <>
        <Route path="/admin/login" element={<Login/>}/>
        <Route path="/admin" >
            <Route path="dashboard" element={<DashBoard/>}/>
.        </Route>
    </>
);

export default AdminRoutes;
