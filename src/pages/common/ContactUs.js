
import NormalProcess from "../../assets/img/normal_process.png";
import InkProcess from "../../assets/img/ink_process.png";
import KakaoMap from "../../components/youtube/KakaoMap";
import {Col, Row} from "react-bootstrap";
const ContactUs = () => {
    return(
        <div id="contact" className="youtube-contact my-5">
            <div className="text-white">
                <span className="title">Contact Us</span>
                <div className="content my-5">
                    <Row className="align-items-end">
                        <Col className="col-lg-6">
                            <KakaoMap/>
                        </Col>
                        <Col className="col-md-auto">
                            <div className="mx-5">
                                <p className="company">주식회사 인클루언스</p>
                                <p>대표: 홍성재, 김태영</p>
                                <p>사업자등록번호: 810-81-02855</p>
                                <p>주소: 경기도 안양시 동안구 안양판교로 40, 106호 (관양동)</p>
                                <p>E-mail: biz@inkluence.com</p>
                                <p className="copyright mt-2">Copyright © 2023 INKLUENCE Co.Ltd. All Rights Reserved </p>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        </div>
    );
};
export default ContactUs;