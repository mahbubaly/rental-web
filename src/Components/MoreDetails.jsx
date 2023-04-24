import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MoreDetails = ({ id }) => {

    const detailsId = useParams();
    console.log(detailsId);

    const navigate = useNavigate();



    const handlerNav = () => {
        navigate(-1);
    };


    return (
        <div>

            <button className='btn btn-primary' onClick={handlerNav}>Go back</button>
        </div>
    );
};

export default MoreDetails;
