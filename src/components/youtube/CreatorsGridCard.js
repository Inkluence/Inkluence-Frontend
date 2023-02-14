// import node module libraries
import React, {useState, Fragment, useEffect} from 'react';
import {Col, Card, Image, Row, Form, Nav, Button} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';

// import data files
import {CreatorsList} from '../../data/youtube/CreatorsData';
import FeatherIcon from "feather-icons-react";

const CreatorsGridCard = () => {
    const [creators, setCreatorsList] = useState(CreatorsList.slice(0, 500));
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState("");
    const categories = [...new Set(creators.map(item => item.category))];
    const [filteredItems, setFilteredItems] = useState([]);

    // paging start
    const [pageNumber, setPageNumber] = useState(0);
    const creatorsPerPage = 8;
    const pagesVisited = pageNumber * creatorsPerPage;
    const pageCount = Math.ceil(creators.length / creatorsPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    };
    const displayCreators = filteredItems
        .slice(pagesVisited, pagesVisited + creatorsPerPage)
        .map((creators) => {
            return (
                <Col xl={3} lg={3} md={6} sm={12} className="creator-col" key={creators.id}>
                    <a className="card_link" href={creators.youtube_link}>
                        <Card>
                            <Card.Body>
                                <div className="text-left">
                                    <Image
                                        src={creators.image}
                                        className="avatar-xl mb-3 youtube-profile"
                                        alt=""
                                    />
                                    <h6 className="mb-1">{creators.name}</h6>
                                </div>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            );
        });
    // end of paging

    // searching code started
    useEffect(() => {
        setFilteredItems(
            creators.filter(item => {
                return (
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
                    (selectedCategory === "" || item.category === selectedCategory)
                );
            })
        );
    }, [searchTerm, selectedCategory]);

    const getSearchTerm = (event) => {
        let searchTerm = event.target.value;
        setSearchTerm(searchTerm);
        if (searchTerm !== '') {
            const newCreatorsList = CreatorsList.filter((creator) => {
                return Object.values(creator)
                    .join(' ')
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) && (selectedCategory === "" || creator.category === selectedCategory);
            });
            setCreatorsList(newCreatorsList.slice(0, 500));
            setPageNumber(0);
        } else {
            setCreatorsList(CreatorsList.slice(0, 500));
        }
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
                {displayCreators.length > 0 ? (
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
