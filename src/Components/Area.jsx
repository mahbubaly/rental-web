import React from 'react';
import { Link } from 'react-router-dom';

const Area = ({ area }) => {
    
    return (
        <div>
            <div className='my-2 '>
                <Link className='text-[18px] text-blue-500 hover:shadow-xl gap-10 mx-auto md:gap-0 hover:p-3 rounded-lg font-semibold    '>{area}</Link>


            </div>



        </div>
    );
};

export default Area;