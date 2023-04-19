import React from 'react';
import { Link } from 'react-router-dom';
import Area from './Area';

const Section_2 = ({ popularArea }) => {

    return (
        <div className='p-12 bg-white'>
            <div className='flex justify-between my-5'>
                <h1 className='font-bold ml-4 text-3xl text-primary hover:text-primary hover:underline hover:translate-x-2 transition duration-500 '>Popular area</h1>

                <p className='text-primary   hover:text-primary hover:underline hover:-translate-x-2 transition duration-500 font-semibold mr-4'> See all area</p>
            </div>


            <div className='grid grid-cols-4 text-center'>
                {
                    popularArea.map(area => <Area
                        key={area.id}
                        area={area.area}
                    />)
                }

            </div>









        </div>
    );
};

export default Section_2;