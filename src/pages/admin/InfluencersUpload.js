import React, { useState } from 'react';
import axios from 'axios';

const InfluencersUpload = () => {
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);

        try {
            const response = await axios.post('/api/upload', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default InfluencersUpload;