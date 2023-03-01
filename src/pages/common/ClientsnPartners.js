
import {Col, Row} from "react-bootstrap";
const ClientsnPartners = () => {

    const images = [
        { id: 1, src: 'https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/Intercontinental+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png' },
        { id: 2, src: 'https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/kitchenaid+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png' },
        { id: 3, src: 'https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/thinkway+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png' },
        { id: 4, src: 'https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/xiaomi+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png' },
    ];


    return(
        <div id="clients_partners" className="youtube-clients">
            <div className="text-white">
                <span className="title">Clients & Partners</span>
                <div className="content">
                    <Row  className="g-4">
                        {images.map((image) => (
                            <Col xl={6} lg={6} md={6} sm={12} key={image.id} className="mt-5">
                                <div>
                                    <img src={image.src} alt={`Image ${image.id}`} width="60%" />
                                </div>
                             </Col>
                        ))}
                    </Row>
                    {/*<Row className="clients-logo ">*/}
                    {/*    /!*<Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/collab+Korea+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt=""/></Col>*!/*/}
                    {/*    <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/Intercontinental+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt=""/></Col>*/}
                    {/*    <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/kitchenaid+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt=""/></Col>*/}
                    {/*    /!*<Col><img src="" alt=""/></Col>*!/*/}
                    {/*    /!*<Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/jeju+air+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt=""/></Col>*!/*/}
                    {/*</Row>*/}
                    {/*/!*<Row className="clients-logo">*!/*/}
                    {/*/!*   *!/*/}
                    {/*/!*    /!*<Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/treasure+hunter+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt=""/></Col>*!/*!/*/}
                    {/*/!*    <Col><img src="" alt=""/></Col>*!/*/}
                    {/*/!*</Row>*!/*/}
                    {/*<Row className="clients-logo">*/}
                    {/*    <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/thinkway+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt=""/></Col>*/}
                    {/*    <Col><img src="https://inkluence-s3-bucket.s3.ap-northeast-2.amazonaws.com/clients/xiaomi+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png" alt=""/></Col>*/}
                    {/*    /!*<Col><img src="" alt=""/></Col>*!/*/}
                    {/*</Row>*/}
                </div>
            </div>
        </div>
    );
};
export default ClientsnPartners;