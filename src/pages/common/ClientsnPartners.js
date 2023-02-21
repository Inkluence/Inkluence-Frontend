
import NormalProcess from "../../assets/img/normal_process.png";
import InkProcess from "../../assets/img/ink_process.png";

import Client1 from "../../assets/img/client1.png";
import {Col, Row} from "react-bootstrap";
const ClientsnPartners = () => {
    return(
        <div id="clients_partners" className="youtube-clients">
            <div className="text-white">
                <span className="title">Clients & Partners</span>
                <div className="content">
                    <Row className="clients-logo ">
                        <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/CLIENT_%E1%84%89%E1%85%A3%E1%84%8B%E1%85%A9%E1%84%86%E1%85%B5.jpeg" alt=""/></Col>
                        <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/CLIENT_%E1%84%8B%E1%85%B0%E1%84%8B%E1%85%B5%E1%84%8F%E1%85%A9%E1%84%89%E1%85%B3-%E1%84%8A%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%B3%E1%84%8B%E1%85%B0%E1%84%8B%E1%85%B5.jpeg" alt=""/></Col>
                        <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/CLIENT_%E1%84%8C%E1%85%A6%E1%84%8C%E1%85%AE%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%A5.jpeg" alt=""/></Col>
                    </Row>
                    <Row className="clients-logo">
                        <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/CLIENT_Hotel_Intercontinental.jpeg" alt=""/></Col>
                        <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/CLIENT_KitchenAid.jpeg" alt=""/></Col>
                        <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/PARNER_%E1%84%8F%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A2%E1%86%B8%E1%84%8F%E1%85%A9%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A1.jpeg" alt=""/></Col>
                    </Row>
                    <Row className="clients-logo">
                        <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/PARTNER_%E1%84%90%E1%85%B3%E1%84%85%E1%85%A6%E1%84%8C%E1%85%A7%E1%84%92%E1%85%A5%E1%86%AB%E1%84%90%E1%85%A5.jpeg" alt=""/></Col>
                        <Col><img src="" alt=""/></Col>
                        <Col><img src="" alt=""/></Col>
                    </Row>
                </div>
            </div>
        </div>
    );
};
export default ClientsnPartners;