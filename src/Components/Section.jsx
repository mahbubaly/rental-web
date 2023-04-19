import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid'

import bed from '../Images/bed-icon.png'
import house from '../Images/house-icon.png'

import shop from '../Images/shop-icon.png'
import Office from '../Images/Office.jpg'
import Section_2 from './Section_2';
import { useLoaderData } from 'react-router-dom';
import { UserPlusIcon, MapPinIcon } from '@heroicons/react/24/solid'




const Section = () => {
    const popularArea = useLoaderData();

    return (
        <>
            <div className='bg-white py-4'>
                <div className='flex justify-center items-center gap-3 py-4'>
                    <MapPinIcon className="h-6 w-6 text-primary " />
                    <h1 className='font-semibold text-2xl'>All Location in Sylhet</h1>
                </div>
                <div className=" form-control  my-3">
                    <div className="input-group">
                        <input type="text" placeholder="What are you looking for?" className="input w-[50%]  ml-24 lg:ml-72" />
                        <button className="btn btn-primary ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>


            </div>



            {/* Sections title and areas name location */}

            <div className='grid md:grid-cols-2 grid-cols-1 p-5 gap-4 bg-white'>



                <div className=' flex justify-center items-center'>
                    <div>
                        <h1 className='font-bold md:text-left text-center text-xl md:text-3xl' >Largest property rental <br /> service in Sylhet</h1>
                        <p className='my-4 '>We present the suitable homes in your hand</p>
                    </div>

                </div>
                <div className='grid md:grid-cols-3 grid-cols-2 m-0'>
                    <div className='p-3 mb-5 rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-1000 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-full w-[40%] ' src={house} alt="" />
                        <h1>House</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-1000 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-full w-[40%] ' src={Office} alt="" />
                        <h1>Apartment</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-1000 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-full w-[40%] ' src={Office} alt="" />
                        <h1>Border</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-1000 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-full w-[40%] ' src={bed} alt="" />
                        <h1>Village house</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-1000 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-full w-[40%]' src={shop} alt="" />
                        <h1>Shop</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-1000 hover:text-white font-semibold hover:bg-primary  justify-center items-center'>

                        <img className='h-full w-[40%] ' src={Office} alt="" />
                        <h1>Office</h1>
                    </div>



                </div>
            </div>
            <Section_2 popularArea={popularArea} />

        </>
    );
};

export default Section;