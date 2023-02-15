import {Col, Row} from "react-bootstrap";
import {Fragment} from "react";
import {Link} from "react-router-dom";
import '../assets/scss/nopage.scss';

import Logo from '../assets/img/logo_black.png'

export default function NoPage() {

    return (
        <Fragment>
            <Row className="noPage">
                <Col>
                    <Row className="align-items-center justify-content-center g-0 py-lg-22 py-10">
                        <Col
                            className="text-center text-lg-start"
                        >
                            <h1 className="display-1 mb-3">404</h1>
                            <p className="mb-5 lead">
                                죄송합니다. 요청하신 페이지를 찾을 수 없습니다.<br/>
                                문제가 있는 경우에는 {' '}
                                <Link to="#" className="btn-link">
                                    <u>이곳으로</u>
                                </Link> 문의해 주세요.

                            </p>
                            <Link to="/" className="btn btn-primary me-2">
                                홈으로 돌아가기
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}