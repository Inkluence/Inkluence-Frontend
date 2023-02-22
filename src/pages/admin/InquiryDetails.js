import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function InquiryDetails() {
    const location = useLocation();
    const id = location.state.id;

    console.log(id);

    const [inquiry, setInquiry] = useState([]);

    useEffect(() => {
        axios.get("/api/inquiry/"+id)
            .then(response => {
                setInquiry(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h2>{inquiry.companyName}</h2>
            <p>Product: {inquiry.productName}</p>
            <p>Manager: {inquiry.manager}</p>
            <p>Contact: {inquiry.managerContact}</p>
            <p>Email: {inquiry.managerEmail}</p>
            <p>Status: {inquiry.status ? "대기중" : "처리완료"}</p>
            <p>Content: {inquiry.content}</p>
        </div>
    );
}

export default InquiryDetails;
