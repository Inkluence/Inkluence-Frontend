import React, { useState } from "react";
import axios from "axios";
import {Button, Form, FormGroup, Modal, Row, Toast} from "react-bootstrap";
import {toast} from "react-toastify";
import Logo from '../../assets/img/logo_black.png';

function InquiryModal(props){


    const [formData, setFormData] = useState({
        companyName: "",
        companyURL: "",
        productName : "",
        manager: "",
        managerContact: "",
        managerEmail: "",
        content: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/api/inquiry", formData)
            .then((response) => {
                console.log(response.data);
                notify();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const notify = () =>{
        toast(<div>📝문의가 접수되었습니다!<br/>빠른 시일 내에 연락드리겠습니다.</div>, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    };

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
        <Modal
                        {...props}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >
                        <Modal.Header>
                            <Modal.Title id="contained-modal-title-vcenter" className="px-3">
                                <Row><img src={Logo} width={50}></img><span className="mx-3">문의하기</span></Row>
                            </Modal.Title>
                            <Button className="close"  onClick={props.onHide} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </Button>
                        </Modal.Header>
                        <Modal.Body className="p-4">
                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="company">
                                    <Form.Label>회사명</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="회사 또는 브랜드명을 입력해주세요."
                                        required
                                        name="companyName" value={formData.companyName} onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="homepage">
                                    <Form.Label>홈페이지 URL</Form.Label>
                                    <Form.Control
                                        type="url"
                                        placeholder="홈페이지 URL 입력해주세요."
                                        required
                                        name="companyURL" value={formData.companyURL} onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="item">
                                    <Form.Label>상품명</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="상품 또는 서비스명을 입력해주세요."
                                        required
                                        name="productName" value={formData.productName} onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="company">
                                    <Form.Label>담당자명</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="담당자 이름을 입력해주세요."
                                        required
                                        name="manager" value={formData.manager} onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>연락처</Form.Label>
                                    <Form.Control
                                        type="phone"
                                        placeholder="연락처를 입력해주세요."
                                        required
                                        name="managerContact" value={formData.managerContact} onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="email">
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="이메일을 입력해주세요."
                                        required
                                        name="managerEmail" value={formData.managerEmail} onChange={handleChange}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="inquiry"
                                >
                                    <Form.Label>문의내용</Form.Label>
                                    <Form.Control as="textarea" placeholder="문의하실 내용을 입력해주세요." rows={5}
                                                  name="content" value={formData.content} onChange={handleChange} />
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={props.onHide}>취소</Button>
                                    <Button variant="primary" type="submit" onClick={props.onHide}>문의하기</Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>
                    </Modal>
       </>
    );
};

 export default InquiryModal;