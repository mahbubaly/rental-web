import React from 'react';
import { Link } from 'react-router-dom';
import Area from './Area';

const Section_2 = ({ popularArea }) => {

    return (
        <div className='rounded bg-white p-[48px] '>
            <div className='flex justify-between gap-4  my-5'>
                <h1 className='font-bold w-full lg:w-auto  text-3xl 2xl:text-5xl text-primary hover:text-primary hover:underline hover:translate-x-2 transition duration-500 '>Popular area</h1>

                <Link to="/search" className='text-primary w-full lg:w-auto lg:text-right   hover:text-primary hover:underline hover:-translate-x-2 transition duration-500 font-semibold lg:text-3xl 2xl:text-4xl  text-2xl mr-4'> See all area</Link>
            </div>


            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-9  text-center'>
                {
                    popularArea.map(area => <Area
                        key={area.id}
                        area={area.area}
                    />)
                }

            </div>



            <div className='flex justify-center items-center mt-5 xl:mt-11 2xl:mt-14'>
                <div className="stats hover:shadow-2xl  shadow">

                    <div className="stat">
                        <div className="stat-title">Total Sylhet District</div>
                        <div className="stat-value">3,452.07 km2</div>
                        <div className="stat-desc mt-2">Sylhet District ; Established, 1782</div>
                    </div>

                </div>
            </div>


            









        </div>
    );
};

export default Section_2;