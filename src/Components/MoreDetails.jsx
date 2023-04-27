import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, useLoaderData } from 'react-router-dom';
import sylhet from '../Images/Sylhet.jpg'
import Basu from '../Images/Basu.jpg'
import { PhoneIcon } from '@heroicons/react/24/solid'



const MoreDetails = () => {

    const [allData, setAllData] = useState([]);


    const detailsId = useParams();
    const { id } = detailsId;
    console.log(id);




    useEffect(() => {
        fetch('/SearchArea.json')
            .then(res => res.json())
            .then(data => setAllData(data));

    }, [])

    const selectedData = allData.find((data) => data.id == id);
    
    const navigate = useNavigate();
    const handlerNav = () => {
        navigate(-1);
    };


    return (
        <>





            <div>
                {
                    selectedData &&


                    <div className='mt-20 container mx-auto p-5 bg-white'>

                        <h1 className='text-[32px] font-bold p-4'>{selectedData.title}</h1>

                        <div className='flex gap-8 text-[16px] px-4'>
                            <h1><span className='text-xl font-bold'> Location: </span> {selectedData.location} </h1>
                            <p>post Data: {selectedData.post_Data}</p>
                        </div>

                        <div className='px-10'>
                            <img className='  rounded-xl mx-auto my-3' src={selectedData.image} alt="" />
                        </div>


                        <div className='grid lg:grid-cols-2 grid-cols-1  gap-4 p-2 items-center'>
                            <div className='flex gap-4 ml-9'>
                                <img className='w-[60px] h-[60px] rounded-md' src={selectedData.image} alt="" />
                                <img className='w-[60px] h-[60px] rounded-md' src={selectedData.image} alt="" />
                                <img className='w-[60px] h-[60px] rounded-md' src={selectedData.image} alt="" />
                                <img className='w-[60px] h-[60px] rounded-md' src={selectedData.image} alt="" />
                                <img className='w-[60px] h-[60px] rounded-md' src={selectedData.image} alt="" />

                            </div>

                            <div className='flex justify-around items-center'>
                                <h1 className='text-primary text-[20px] font-semibold'>{selectedData.rent}</h1>

                                <button className='btn btn-primary'> <PhoneIcon className="h-6 w-6 text-white mx-1" /> Call Now</button>
                            </div>
                        </div>
                        <div className='flex gap-8  ml-6 p-4'>
                            <h1 className='text-[16px]' ><span className='text-[16px] font-bold'>Space:</span> {selectedData.space_feet} sqft </h1>
                            <h1><span className='text-[18px] font-bold'>Room: </span> {selectedData.rooms}</h1>
                            <h1><span className='text-[18px] font-bold'>Bathroom:</span> {selectedData.bathrooms}</h1>

                        </div>

                        <div className='p-4 ml-6'>
                            <h1 className='text-lg font-bold'>Description:</h1>


                            <p>{selectedData.description}</p>
                        </div>



                        <div className='ml-6'>
                            <h1 className='text-xl font-bold p-2'>Related Apartments </h1>

                            <h1 className='text-center'>Loading...</h1>






                        </div>




                        <div className='flex justify-center'>
                            <button className='btn btn-primary text-center my-6' onClick={handlerNav}>Go back</button>

                        </div>



                    </div>














                }
            </div>










        </>
    );
};

export default MoreDetails;
