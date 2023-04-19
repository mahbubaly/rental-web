import React from 'react';
import { Link } from 'react-router-dom';

const Area = ({ area }) => {
    console.log(area);
    return (
        <div>
            <div className='my-2 '>
                <Link className='text-xl font-semibold hover:text-blue-500 '>{area}</Link>


            </div>



        </div>
    );
};

export default Area;