import { Col, Row, Card, Tab, Breadcrumb } from 'react-bootstrap';
import GridListViewButton from "../../components/admin/GridListViewButton";
import InfluencersGridCard from "../../components/admin/InfluencersGridCard";
import InfluencersListItems from "../../components/admin/InfluencersListItems";

const Influencers = () => {
    return(
        <div>
            <h1>Influencers</h1>
            <div>
                <Tab.Container defaultActiveKey="grid">
                    <Row>
                        <Col lg={12} md={12} sm={12}>
                            <div className="border-bottom pb-4 mb-4 d-flex align-items-center justify-content-between">
                                <div className="mb-3 mb-md-0">
                                    {/*<h1 className="mb-1 h2 fw-bold">*/}
                                    {/*    Creators <span className="fs-5 text-muted">(1,22,105 )</span>*/}
                                    {/*</h1>*/}
                                    {/*<Breadcrumb>*/}
                                    {/*    <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>*/}
                                    {/*    <Breadcrumb.Item href="#">User</Breadcrumb.Item>*/}
                                    {/*    <Breadcrumb.Item active>Students</Breadcrumb.Item>*/}
                                    {/*</Breadcrumb>*/}
                                </div>
                                <div>
                                    <GridListViewButton keyGrid="grid" keyList="list" />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Tab.Content>
                        <Tab.Pane eventKey="grid" className="pb-4">
                            {/* students in list view */}
                            <InfluencersGridCard />
                            {/* end of students in list view */}
                        </Tab.Pane>
                        <Tab.Pane eventKey="list" className="pb-4">
                            <Card className="mb-5 ">
                                <Card.Body className="p-0">
                                    {/* students in list view */}
                                    <InfluencersListItems />
                                    {/* end of students in list view */}
                                </Card.Body>
                            </Card>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
        </div>
    );
}

export default Influencers;