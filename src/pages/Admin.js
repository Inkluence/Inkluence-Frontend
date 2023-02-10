import {useEffect, useState} from "react";
import Login from "./admin/Login";
import {Outlet, useNavigate} from "react-router-dom";
import NavBar from "../components/admin/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import SideBar from "../components/admin/SideBar";
import "../assets/scss/dashboard.scss";

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
                            <Col ><SideBar></SideBar></Col>
                                <main role="main" className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
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