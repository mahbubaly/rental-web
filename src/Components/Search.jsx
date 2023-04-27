import React, { useState } from 'react';
import { UserPlusIcon, MapPinIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import { useLoaderData, useNavigate } from 'react-router-dom';
import AreaDetails from './AreaDetails';


const Search = () => {
    const [showOptions, setShowOptions] = useState(false);

    const searchAreas = useLoaderData()

    const navigate = useNavigate();

    const handlerNavigate = () => {
        navigate(-1);

    }


    return (
        < >
            <div className=' py-4 container mx-auto '>
                <div className='flex justify-center items-center gap-3 py-4'>
                    <MapPinIcon className="h-6 w-6 text-primary " />
                    <h1 className='font-bold text-2xl '>All Location in Sylhet</h1>
                </div>



                <div className='flex flex-col items-center px-4 md:px-12 justify-around my-4 md:flex-row md:items-center md:justify-between'>
                    {/* Room type */}
                    <div className="relative">
                        <input
                            type="text"
                            className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Select room type"
                        />
                        <div
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                            onClick={() => setShowOptions(!showOptions)}
                        >
                            {showOptions === true ? (
                                <ChevronUpIcon className="h-5 w-5 text-primary" />
                            ) : (
                                <ChevronDownIcon className="h-5 w-5 text-primary" />
                            )}
                        </div>
                        {showOptions && (
                            <div className="absolute z-10 mt-1 py-1 w-full bg-white rounded-md shadow-lg">
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white w-full text-left">
                                    Single room
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white w-full text-left">
                                    Double Room
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white w-full text-left">
                                    Ac Room
                                </button>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white w-full text-left">
                                    Non Ac Room
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Location */}
                    <div className="flex items-center justify-center mt-4 md:mt-0 md:ml-6">
                        <label htmlFor="location" className="sr-only">
                            Location
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder="Enter location"
                                className="bg-gray-100 border border-gray-400 px-4 py-2 pl-10 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <MapPinIcon className="w-6 h-6 text-primary" />
                            </div>
                        </div>
                    </div>

                    {/* More filters */}
                    <div className="flex justify-center gap-3 items-center mt-4 md:mt-0 md:ml-6">
                        <AdjustmentsHorizontalIcon className="w-6 h-6 text-primary" />
                        <h1 className="text-xl font-semibold">More Filters</h1>
                    </div>

                    {/* Search button */}
                    <div className="mt-4 md:mt-0 md:ml-6">
                        <button className="bg-primary  text-white font-bold py-2 px-4 rounded">
                            Search
                        </button>
                    </div>
                </div>


                <div className='text-[18px] ml-14 mt-7 relative lg:top-4 font-bold'>{searchAreas.length} results found</div>
                <div>
                    <span  className='px-4 py-1 text-[18px] relative text-white top-12  lg:top-16 lg:ml-12 ml-14 bg-[#FFA75A] 
                    rounded-t-lg font-semibold'>Top ad</span>
                </div>
                <div className='md:p-12 p-4 '>
                    {
                        searchAreas.map(searchArea => <AreaDetails
                            key={searchArea.id}
                            searchArea={searchArea}


                        />

                        )
                    }

                    <div className='flex justify-center items-center gap-4 mt-7 font-bold'>

                        < ChevronLeftIcon className="h-6 w-6 text-primary " />

                        <h1 className='rounded-lg p-3 hover:text-primary'>1</h1>
                        <h1 className='rounded-lg p-3 hover:text-primary'>2</h1>
                        <h1 className='rounded-lg p-3 hover:text-primary'>3</h1>
                        <h1 className='rounded-lg p-3 hover:text-primary'>4</h1>
                        <h1 className='rounded-lg p-3 hover:text-primary'>5</h1>
                        <ChevronRightIcon className="h-6 w-6 text-primary " />

                    </div>
                    <button className="btn btn-primary mx-auto flex" onClick={handlerNavigate}>Go back</button>
                </div>



            </div>






        </>
    );
};

export default Search;