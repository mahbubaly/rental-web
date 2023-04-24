import React from 'react';
import { Link } from 'react-router-dom';
import Area from './Area';

const Section_2 = ({ popularArea }) => {

    return (
        <div className='p-12 bg-white'>
            <div className='flex justify-between my-5'>
                <h1 className='font-bold ml-4 text-3xl 2xl:text-5xl text-primary hover:text-primary hover:underline hover:translate-x-2 transition duration-500 '>Popular area</h1>

                <Link to="/search" className='text-primary   hover:text-primary hover:underline hover:-translate-x-2 transition duration-500 font-semibold lg:text-3xl 2xl:text-4xl  text-2xl mr-4'> See all area</Link>
            </div>


            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  text-center'>
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