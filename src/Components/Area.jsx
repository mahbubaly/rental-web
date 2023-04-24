import React from 'react';
import { Link } from 'react-router-dom';

const Area = ({ area }) => {
    
    return (
        <div>
            <div className='my-2 '>
                <Link className='text-xl hover:shadow-xl hover:p-2 rounded-lg font-semibold hover:text-blue-500 lg:text-2xl 2xl:text-4xl '>{area}</Link>


            </div>



        </div>
    );
};

export default Area;