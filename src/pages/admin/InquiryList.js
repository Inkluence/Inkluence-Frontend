import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Fragment} from "react";
import {Breadcrumb, Row, Col, Card, Tab, Nav} from "react-bootstrap";
import InquiryTable from "./InquiryTable";

function InquiryList() {
    const [waitingInquiries, setWaitingInquiries] = useState([]);

    useEffect(() => {
        axios.get("/api/waitinginquiries")
            .then(response => {
                setWaitingInquiries(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="inquiry">
            <Row>
            <Col lg={12} md={12} sm={12}>
            <div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
            <h1 className="mb-1 h2 fw-bold">문의</h1>
            </div>
            </div>
            </Col>
            </Row>
            <Row >
            <Tab.Container defaultActiveKey="all"  >
            <Card className="inquiry-card">
            <Card.Header className="border-bottom-0 p-0 bg-white">
            <Nav className="nav-lb-tab bg-dark">
            <Nav.Item>
            <Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
            All
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
            Approved
            </Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link eventKey="pending" className="mb-sm-3 mb-md-0">
            Pending
            </Nav.Link>
            </Nav.Item>
            </Nav>
            </Card.Header>
            <Card.Body className="p-0">
            <Tab.Content>
            <Tab.Pane eventKey="all" className="pb-4">
            <InquiryTable inquiry_data={waitingInquiries} />
            </Tab.Pane>
            <Tab.Pane eventKey="approved" className="pb-4">
            <InquiryTable inquiry_data={waitingInquiries} />
            </Tab.Pane>
            <Tab.Pane eventKey="pending" className="pb-4">
            <InquiryTable inquiry_data={waitingInquiries} />
            </Tab.Pane>
            </Tab.Content>
            </Card.Body>
            </Card>
            </Tab.Container>
            </Row>

            {/*{inquiries.map(inquiry => (*/}
            {/*    <Link key={inquiry.id} to={`/admin/inquiry/${inquiry.id}`} state={{ inquiry }}>*/}
            {/*        <div>*/}
            {/*            <h2>{inquiry.companyName}</h2>*/}
            {/*            <p>Product: {inquiry.productName}</p>*/}
            {/*            <p>Manager: {inquiry.manager}</p>*/}
            {/*            <p>Contact: {inquiry.managerContact}</p>*/}
            {/*            <p>Email: {inquiry.managerEmail}</p>*/}
            {/*            <p>Status: {inquiry.status ? "대기중" : "처리완료"}</p>*/}
            {/*            <p>Content: {inquiry.content}</p>*/}
            {/*        </div>*/}
            {/*    </Link>*/}
            {/*))}*/}
        </div>
    );
}

export default InquiryList;
