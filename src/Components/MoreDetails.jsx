import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios'

const MoreDetails = () => {


    const detailsId = useParams();
    console.log(detailsId);


    useEffect(() =>{
        axios.get('SearchArea.json')
        .then(data => console.log(data));
    }, [])

    const navigate = useNavigate();



    const handlerNav = () => {
        navigate(-1);
    };


    return (
        <div className='p-4'>

            <button className='btn btn-primary ' onClick={handlerNav}>Go back</button>
        </div>
    );
};

export default MoreDetails;
