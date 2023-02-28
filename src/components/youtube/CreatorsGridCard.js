// import node module libraries
import React, {useState, Fragment, useEffect} from 'react';
import {Col, Card, Image, Row, Form, Nav, Button} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import FeatherIcon from "feather-icons-react";
import axios from "axios";

const CreatorsGridCard = () => {
    // const [creators, setCreatorsList] = useState(CreatorsList.slice(0, 500));
    const [CreatorsList, setCreatorsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    const [categories, setCategories] = useState([]);
    // const categories = [...new Set(CreatorsList.map(item => item.category))];
    const [displayedCreators, setDisplayedCreators] = useState([]);


    useEffect(() => {
        axios.get("/api/user/all").then((response) => {
            setCreatorsList(response.data);
        });
    }, []);

    // filter creators based on selected category and search term
    useEffect(() => {
        let filteredCreators = CreatorsList;
        if (Array.isArray(CreatorsList)) {
            setCategories([...new Set(CreatorsList.map(item => item.category))])
        }

        if (selectedCategory !== '') {
            filteredCreators = filteredCreators.filter(creator => creator.category === selectedCategory);
        }

        if (searchTerm !== '') {
            filteredCreators = filteredCreators.filter(creator => creator.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }

        setDisplayedCreators(filteredCreators);
        setPageNumber(0);
    }, [CreatorsList, selectedCategory, searchTerm]);


    // paging start
    const [pageNumber, setPageNumber] = useState(0);
    const creatorsPerPage = 8;
    const pagesVisited = pageNumber * creatorsPerPage;
    const pageCount = Math.ceil(displayedCreators.length / creatorsPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    const displayCreators = Array.isArray(displayedCreators)
        ? displayedCreators.slice(pagesVisited, pagesVisited + creatorsPerPage).map((creators) => {
            return (
                <Col xl={3} lg={3} md={6} sm={3} className="creator-col" key={creators.id}>
                    {/*<a className="card_link" href={creators.youtube.channelURL} target="_blank">*/}
                        <Card>
                            <Card.Body>
                                <div className="text-left">
                                    <Image
                                        width="256px"
                                        height="256px"
                                        src={creators.image}
                                        className="avatar-xl mb-3 youtube-profile"
                                        alt=""
                                    />
                                    <h6 className="mb-1">{creators.name}</h6>
                                </div>
                            </Card.Body>
                        </Card>
                    {/*</a>*/}
                </Col>
            );
        })
        : null;

    // end of paging


    const getSearchTerm = (event) => {
        setSearchTerm(event.target.value);
    };

    // end of searching

    return (
        <Fragment>
            <Row>
                <Col className="mb-3">
                    <Row>
                        <Col>
                            <div>
                                <Nav variant="pills">
                                    <Nav.Item>
                                        <Button className="category mr-2"
                                                onClick={() => setSelectedCategory("")}
                                                style={{
                                                    backgroundColor: selectedCategory === "" ? "#007bff" : "transparent",
                                                    color: selectedCategory === "" ? "white" : "grey"

                                                }}
                                        >
                                            전체
                                        </Button>
                                        {categories.map(category => (
                                            <Button className="category mx-2"
                                                    key={category}
                                                    onClick={() => setSelectedCategory(category)}
                                                    style={{
                                                        backgroundColor: selectedCategory === category ? "#007bff" : "transparent",
                                                        color: selectedCategory === category ? "white" : "grey"
                                                    }}
                                            >
                                                {category}
                                            </Button>
                                        ))}
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col className="pe-0">
                            <Form.Group className="mb-3 position-relative" controlId="formSearchbyName">
                                <Form.Control
                                    placeholder="크리에이터 검색하기"
                                    type="search"
                                    value={searchTerm}
                                    onChange={getSearchTerm}
                                    className="search"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                {/*<ItemList/>*/}
                {displayedCreators.length > 0 ? (
                    displayCreators
                ) : (
                    <Col>해당 크리에이터를 찾을 수 없습니다.</Col>
                )}
            </Row>

            <ReactPaginate
                previousLabel={<FeatherIcon icon="chevron-left"/>}
                nextLabel={<FeatherIcon icon="chevron-right"/>}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'justify-content-center mb-0 pagination'}
                previousLinkClassName={'page-link mx-1 rounded'}
                nextLinkClassName={'page-link mx-1 rounded'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link mx-1 rounded'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'active'}
            />
        </Fragment>
    );
};

export default CreatorsGridCard;
