import {Button, Form, FormGroup, Modal, Row, Toast} from "react-bootstrap";
import {useState} from "react";
import {toast} from "react-toastify";
import Logo from '../../assets/img/logo_black.png';

function InquiryModal(props) {

    const [company, setCompany] = useState("");
    const [item, setItem] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [homepage, setHomepage] = useState("");
    const [inquiry, setInquiry] = useState("");


    const handleClick = (e) => {
        e.preventDefault();
            // Handle form submission here
            console.log("Form submitted:", company, item, phone, email, homepage, inquiry);
            props.onHide();

            //when submission success
            notify();
    }

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


    return (
        <div>
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
                <FormGroup onSubmit={handleClick}>
                <Form>
                    <Form.Group className="mb-3" controlId="company">
                        <Form.Label>회사명</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="회사 또는 브랜드명을 입력해주세요."
                            autoFocus
                            required
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="item">
                        <Form.Label>상품명</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="상품 또는 서비스명을 입력해주세요."
                            required
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="company">
                        <Form.Label>담당자명</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="담당자 이름을 입력해주세요."
                            autoFocus
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="phone">
                        <Form.Label>연락처</Form.Label>
                        <Form.Control
                            type="phone"
                            placeholder="연락처를 입력해주세요."
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>이메일</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="이메일을 입력해주세요."
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="homepage">
                        <Form.Label>홈페이지 URL</Form.Label>
                        <Form.Control
                            type="url"
                            placeholder="홈페이지 URL 입력해주세요."
                            required
                            value={homepage}
                            onChange={(e) => setHomepage(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="inquiry"
                    >
                        <Form.Label>문의내용</Form.Label>
                        <Form.Control as="textarea" placeholder="문의하실 내용을 입력해주세요." rows={5}
                                      value={inquiry}
                                      onChange={(e) => setInquiry(e.target.value)}/>
                    </Form.Group>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={props.onHide}>취소</Button>
                        <Button variant="primary" type="submit">문의하기</Button>
                    </Modal.Footer>
                </Form>
                </FormGroup>
            </Modal.Body>
        </Modal>
        </div>


    );
}

export default InquiryModal;