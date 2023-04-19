import React, { useState } from 'react';
import { UserPlusIcon, MapPinIcon, ChevronDownIcon, ChevronUpIcon,AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'

const Search = () => {
    const [showOptions, setShowOptions] = useState(false);


    return (
        <div className=''>
            <div className='bg-white py-4 '>
                <div className='flex justify-center items-center gap-3 py-4'>
                    <MapPinIcon className="h-6 w-6 text-primary " />
                    <h1 className='font-semibold text-2xl'>All Location in Sylhet</h1>
                </div>



                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 px-12 justify-around my-4'>




                    {/* Apartment 1 */}

                    <div className="relative">
                        <input type="text" className="px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Apartment" />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={() => setShowOptions(!showOptions)}>
                            {
                                showOptions === true ? <ChevronUpIcon className="h-5 w-5 text-primary" /> : <ChevronDownIcon className="h-5 w-5 text-primary" />
                            }



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






                    <div className="flex items-center justify-center">
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

                    <div className='flex justify-center items-center gap-3'>
                        <AdjustmentsHorizontalIcon className="w-6 h-6 text-primary" />
                        <h1 className='text-xl font-semibold'>More Filters</h1>

                    </div>



                    <div>
                        <button className='btn btn-primary'>Search</button>
                    </div>




                </div>



            </div>

        </div>
    );
};

export default Search;