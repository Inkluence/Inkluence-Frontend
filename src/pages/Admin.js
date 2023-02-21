import {useEffect, useState} from "react";
import Login from "./admin/Login";
import {Outlet, useNavigate} from "react-router-dom";
import NavBar from "../components/admin/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../components/admin/SideBar";
import "../assets/scss/dashboard.scss";
import "../assets/scss/inquiry.scss";

const Admin = () => {
    const [isLogin, setIsLogin] = useState(false)
    const navigate = useNavigate()


    useEffect(()=> {
        if(sessionStorage.getItem('username') !== null){
            setIsLogin(true)
            navigate('/admin/dashboard')
        }
    },[isLogin])

    return (
        <>
            {isLogin?
                <div>
                    <NavBar/>
                    <Container className="container-fluid">
                        <Row className="row">
                            <SideBar></SideBar>
                                <main role="main" className="col-md-10 ml-sm-auto col-lg-10 pt-3 px-4">
                                    <div className="">
                                       <Outlet/>
                                    </div>
                                </main>
                        </Row>
                    </Container>
            </div>
                :
                <Login/>}
        </>
    );
};

export default Admin;