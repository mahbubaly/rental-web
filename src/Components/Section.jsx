import React, { useEffect, useState } from 'react';
import { HomeIcon } from '@heroicons/react/24/solid'
import bed from '../Images/bed-icon.png'
import house from '../Images/house-icon.png'
import shop from '../Images/shop-icon.png'
import Office from '../Images/Office.jpg'
import Section_2 from './Section_2';
import { UserPlusIcon, MapPinIcon } from '@heroicons/react/24/solid'
const Section = () => {
    const [popularArea, setPopularArea] = useState([]);

    useEffect(() => {
        fetch('popular_area.json')
            .then(res => res.json())
            .then(data => setPopularArea(data));

    }, [])

    return (
        <>
            <div className=' py-4 mt-[70px]'>
                <div className='flex justify-center items-center gap-3 py-4'>
                    <MapPinIcon className="h-6 w-6 text-primary " />
                    <h1 className='font-semibold text-2xl 2xl:text-center text-primary xl:text-4xl'>All Location in Sylhet</h1>
                </div>


                <div className=" form-control  my-3">
                    <div className="flex justify-center items-center w-full">
                        <input type="text" placeholder="What are you looking for?" className="input bg-white  rounded-s-lg  w-[50%]" />
                        <div className=''>
                            <button className=" p-3  btn-primary rounded-r-lg   ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>


            </div>



            {/* Sections title and areas name location */}

            <div className=' flex flex-col p-4  md:flex-row justify-between   items-center  2xl:gap-28  my-[80px]'>



                <div className=' flex justify-center items-center  w-full  '>
                    <div className='ml-'>
                        <h1 className='font-bold  md:text-left   text-center text-[44px]' >Largest property rental  service  in Sylhet</h1>
                        <p className='my-4 text-xl lg:text-2xl'>We present the suitable homes in your hand</p>
                    </div>

                </div>
                <div className='grid lg:grid-cols-3 grid-cols-2  w-full'>

                    <div className=' p-[26px] rounded gap-4 md:gap-0 shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-700 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-[33px]  w-[33px] ' src={house} alt="" />
                        <h1>House</h1>
                    </div>
                    <div className='p-[26px] rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-700 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-[33px]  w-[33px] ' src={Office} alt="" />
                        <h1>Apartment</h1>
                    </div>
                    <div className='p-[26px] rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-700 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-[33px]  w-[33px] ' src={Office} alt="" />
                        <h1>Border</h1>
                    </div>
                    <div className=' p-[26px] rounded gap-4 md:gap-0 shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-700 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-[33px]  w-[33px] ' src={house} alt="" />
                        <h1>House</h1>
                    </div>
                    <div className='p-[26px] rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-700 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-[33px]  w-[33px] ' src={Office} alt="" />
                        <h1>Apartment</h1>
                    </div>
                    <div className='p-[26px] rounded shadow-lg mx-auto flex flex-col hover:shadow-xl ease-in-out duration-700 hover:text-white font-semibold hover:bg-primary justify-center items-center'>

                        <img className='h-[33px]  w-[33px] ' src={Office} alt="" />
                        <h1>Border</h1>
                    </div>



                </div>
            </div>
            <Section_2 popularArea={popularArea} />

        </>
    );
};

export default Section;