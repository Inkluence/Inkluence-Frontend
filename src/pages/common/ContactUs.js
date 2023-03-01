
import KakaoMap from "../../components/youtube/KakaoMap";
import {Col, Row} from "react-bootstrap";
const ContactUs = () => {
    return(
        <div id="contact" className="youtube-contact my-5">
            <div className="text-white">
                <span className="title">Contact Us</span>
                <div className="content my-5">
                    {/*<Row  className="g-4">*/}
                    {/*    {images.map((image) => (*/}
                    {/*        <Col xl={6} lg={6} md={6} sm={12} key={image.id} className="mt-5">*/}
                    {/*            <div>*/}
                    {/*                <img src={image.src} alt={`Image ${image.id}`} width="60%" />*/}
                    {/*            </div>*/}
                    {/*        </Col>*/}
                    {/*    ))}*/}
                    {/*</Row>*/}
                    <Row className="align-items-end">

                        <Col xl={6} lg={6} md={6} sm={12}>
                            <KakaoMap/>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12} className="company-detail">
                            <div className="mx-5">
                                <p className="company">주식회사 인클루언스</p>
                                <p>대표: 홍성재, 김태영</p>
                                <p>사업자등록번호: 810-81-02855</p>
                                <p>주소: 서울시 구로구 디지털로 31기 12, 2층(구로동, 태평양물산)</p>
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