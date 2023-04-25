import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import sylhet from '../Images/Sylhet.jpg'
import Basu from '../Images/Basu.jpg'
import { PhoneIcon } from '@heroicons/react/24/solid'


const MoreDetails = () => {


    const detailsId = useLoaderData();

    const { title, url, name, phone, company } = detailsId;



    console.log(detailsId);
    const navigate = useNavigate();
    const handlerNav = () => {
        navigate(-1);
    };


    return (
        <>


            <div className='mt-24 bg-white'>

                <h1 className='text-[32px] font-bold p-4'>Exclusive flat in prime location!</h1>

                <div className='flex gap-8 text-[16px] px-4'>
                    <h1>Location: Zindabazar </h1>
                    <p>post Data: 2 days ago</p>
                </div>

                <div className='px-10'>
                    <img className='  rounded-xl mx-auto my-3' src={sylhet} alt="" />
                </div>


                <div className='flex justify-between p-2 items-center'>
                    <div className='flex gap-4 p-3'>
                        <img className='w-[60px] h-[60px] rounded-md' src={Basu} alt="" />
                        <img className='w-[60px] h-[60px] rounded-md' src={Basu} alt="" />
                        <img className='w-[60px] h-[60px] rounded-md' src={Basu} alt="" />
                        <img className='w-[60px] h-[60px] rounded-md' src={Basu} alt="" />
                        <img className='w-[60px] h-[60px] rounded-md' src={Basu} alt="" />

                    </div>

                    <h1 className='text-primary text-[20px] font-semibold'>20,000/month</h1>

                    <button className='btn btn-primary'> <PhoneIcon className="h-6 w-6 text-white mx-1" /> Call Now</button>
                </div>
                <div className='flex gap-8 my-6 p-4'>
                    <h1 className='text-[16px]' ><span className='text-[16px] font-bold'>Space:</span> 2000sqft</h1>
                    <h1><span className='text-[18px] font-bold'>Room:</span> 4</h1>
                    <h1><span className='text-[18px] font-bold'>Bathroom:</span> 2</h1>

                </div>

                <div className='p-4'>
                    <h1 className='text-lg font-bold'>Description:</h1>


                    <p>Classifieds are usually the first place you think of when you are getting ready to make a purchase. Whether you want to purchase a vehicle, bed, or pet, the classified section of your local newspaper can be one of the best resources available. With the emergence of the web however, many sites are being developed to host free classifieds. More and more people are using the web daily; making these classified sites some of the most popular sites around.</p>
                </div>



                <div>
                    <h1 className='text-xl font-bold p-2'>Related Apartments </h1>

                    <h1 className='text-center'>Loading...</h1>






                </div>




                <div className='flex justify-center'>
                    <button className='btn btn-primary text-center my-6' onClick={handlerNav}>Go back</button>

                </div>



            </div>
        </>
    );
};

export default MoreDetails;
