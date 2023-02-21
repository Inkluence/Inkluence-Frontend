// import node module libraries
import React, { Fragment, useMemo } from 'react';
import {
    useTable,
    useFilters,
    useGlobalFilter,
    usePagination
} from 'react-table';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Image, Dropdown, Table } from 'react-bootstrap';

// import custom components
import GlobalFilter from '../../../src/components/elements/GlobalFilter';
import Pagination from '../../../src/components/elements/Pagination';
import DotBadge from '../../../src/components/elements/DotBadge';
import FeatherIcon from "feather-icons-react";

const InquiryTable = ({ inquiry_data }) => {


    const columns = useMemo(
        () => [
            { accessor: 'id', Header: '문의#', Cell: ({value, row}) => {
                return(
                        <Link key={value} to={`/admin/inquiry/${value}`} state={{id: value}}>
                            #{value}
                        </Link>
                )
                } },
            {
                accessor: 'companyName',
                Header: '회사명',
                Cell: ({ value, row }) => {
                    return (
                            <div className="d-lg-flex align-items-center">
                                <div className="ms-lg-3 mt-2 mt-lg-0">
                                    <h6 className="mb-1 text-primary-hover">{value}</h6>
                                </div>
                            </div>
                    );
                }
            },
            { accessor: 'created_at', Header: '문의날짜', Cell: ({value, row}) =>{
                return(
                    <div>
                        <span>{value}</span>
                    </div>
                )
                } },
            {
                accessor: 'manager',
                Header: '매니저',
                Cell: ({ value, row }) => {
                    return (
                        <div className="d-flex align-items-center">
                            <span className="mb-0">{value}</span>
                        </div>
                    );
                }
            },
            {
                accessor: 'status',
                Header: 'STATUS',

                Cell: ({ value, row }) => {
                    return (
                        <Fragment>
                            <DotBadge
                                bg={
                                    value === true
                                        ? 'warning'
                                        : value === false
                                            ? 'success'
                                            : ''
                                }
                            ></DotBadge>
                            {value== true? "대기중" : "완료"}
                        </Fragment>
                    );
                }
            },

        ],
        []
    );

    const data = useMemo(() => inquiry_data, [inquiry_data]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        state,
        gotoPage,
        pageCount,
        prepareRow,
        setGlobalFilter
    } = useTable(
        {
            columns,
            data,
            initialState: {
                pageSize: 10,
                hiddenColumns: columns.map((column) => {
                    if (column.show === false) return column.accessor || column.id;
                    else return false;
                })
            }
        },
        useFilters,
        useGlobalFilter,
        usePagination
    );

    const { pageIndex, globalFilter } = state;

    return (
        <Fragment>
            <div className=" overflow-hidden">
                <Row>
                    <Col lg={12} md={12} sm={12} className="mb-lg-0 mb-2 py-4 px-5 ">
                        <GlobalFilter
                            filter={globalFilter}
                            setFilter={setGlobalFilter}
                            placeholder="Search Course"
                        />
                    </Col>
                </Row>
            </div>

            <div className="table-responsive border-0 overflow-y-hidden">
                <Table {...getTableProps()} className="text-nowrap">
                    <thead className="table-light">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                    </tbody>
                </Table>
            </div>

            {/* Pagination @ Footer */}
            <Pagination
                previousPage={previousPage}
                pageCount={pageCount}
                pageIndex={pageIndex}
                gotoPage={gotoPage}
                nextPage={nextPage}
            />
        </Fragment>
    );
};

export default InquiryTable;
