import { Nav, Button } from 'react-bootstrap';
import FeatherIcon from "feather-icons-react";

const GridListViewButton = ({ keyGrid, keyList }) => {
    return (
        <div className="me-2">
            <Nav className="float-end flex-nowrap">
                <Nav.Item className="btn-group">
                    <Nav.Link eventKey={keyGrid} className="mb-sm-3 mb-md-0 p-0">
                        <Button
                            variant="outline-primary"
                            className="btn-outline-white btn-tab-left"
                        >
                            <FeatherIcon icon="grid"/>
                        </Button>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="btn-group">
                    <Nav.Link eventKey={keyList} className="mb-sm-3 mb-md-0 p-0">
                        <Button
                            variant="outline-primary"
                            className="btn-outline-white btn-tab-right"
                        >
                            <FeatherIcon icon="list"/>
                        </Button>
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
};

export default GridListViewButton;
