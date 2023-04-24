import React from 'react';
import { Link } from 'react-router-dom';

const AreaDetails = ({ searchArea }) => {
    
    const { id, title, space_feet, bathrooms, location, rent, rooms,image } = searchArea;
    return (
        <>
            <Link id={id} to={`/details/${id}`} className='my-4 p-4 hover:shadow-2xl hover:shadow-slate-300 shadow-md md:flex justify-between items-center'>
                <div className='md:flex items-center  gap-5'>
                    <img className='md:w-[100px] md:h-[100px] h-[200px] w-[200px] mx-auto  rounded-lg md:flex md:items-center' src={image} alt="" />
                    <div className='md:my-0 my-4'>
                        <h1 className='font-bold text-2xl'>{title}</h1>
                        <h2 className='my-3 '> <span className='font-semibold text-xl'>Location: </span>{location}</h2>
                        <div className='flex gap-5 my-4'>
                            <p><span className='font-semibold text-xl'>space: {space_feet}</span></p>
                            <p><span className='font-semibold text-xl'>Room: {rooms}</span></p>
                            <p><span className='font-semibold text-xl'>Bathroom: {bathrooms}</span></p>
                        </div>
                    </div> 
                    
                </div>
                <div>
                    <h1 className='font-bold text-primary hover:text-secondary'>{rent}</h1>

                </div>
            </Link>



        </>
    );
};

export default AreaDetails;