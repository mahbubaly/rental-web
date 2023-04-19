import React from 'react';
import { UserPlusIcon, MapPinIcon } from '@heroicons/react/24/solid'

const Search = () => {
    return (
        <div>
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

        </div>
    );
};

export default Search;