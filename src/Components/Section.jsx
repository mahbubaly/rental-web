import React from 'react';
import { HomeIcon } from '@heroicons/react/24/solid'

import bed from '../Images/bed-icon.png'
import house from '../Images/house-icon.png'

import shop from '../Images/shop-icon.png'
import Office from '../Images/Office.jpg'
import Section_2 from './Section_2';
import { useLoaderData } from 'react-router-dom';




const Section = () => {
    const popularArea = useLoaderData();
    
    return (
        <>
            <div className='grid md:grid-cols-2 grid-cols-1 p-5 gap-4 bg-white'>
                <div className=' flex justify-center items-center'>
                    <div>
                        <h1 className='font-bold text-3xl' >Largest property rental <br /> service in Sylhet</h1>
                        <p className='my-4 '>We present the suitable homes in your hand</p>
                    </div>

                </div>
                <div className='grid grid-cols-3 m-0'>
                    <div className='p-3 mb-5 rounded shadow mx-auto flex flex-col hover:bg-slate-500 hover:duration-1000 justify-center items-center'>

                        <img className='h-full w-[40%] ' src={house} alt="" />
                        <h1>House</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow mx-auto flex flex-col justify-center items-center'>

                        <img className='h-full w-[40%] ' src={Office} alt="" />
                        <h1>Apartment</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow mx-auto flex flex-col justify-center items-center'>

                        <img className='h-full w-[40%] ' src={Office} alt="" />
                        <h1>Border</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow mx-auto flex flex-col justify-center items-center'>

                        <img className='h-full w-[40%] ' src={bed} alt="" />
                        <h1>Village house</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow mx-auto flex flex-col justify-center items-center'>

                        <img className='h-full w-[40%]' src={shop} alt="" />
                        <h1>Shop</h1>
                    </div>
                    <div className='p-3 mb-5 rounded shadow mx-auto flex flex-col justify-center items-center'>

                        <img className='h-full w-[40%] ' src={Office} alt="" />
                        <h1>Office</h1>
                    </div>



                </div>
            </div>
            <Section_2 popularArea={popularArea}/>

        </>
    );
};

export default Section;