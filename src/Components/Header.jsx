import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg'
import { UserPlusIcon, XMarkIcon, Bars3Icon, QuestionMarkCircleIcon, EllipsisHorizontalCircleIcon, HomeIcon } from '@heroicons/react/24/solid'
import Section from './Section';
import Section_2 from './Section_2';
import '../Components/Css/Style.css'

const Header = () => {
    const [open, setOpen] = useState(false);





    return (
        <>




            <div className='flex justify-between  bg-white p-3 items-center'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span className='bg-black '>
                        {
                            open === true ?
                                <div className='flex gap-14 duration-1000  '>
                                    <Link to="/"><img className='w-[40px] h-[30px] ' src={logo} alt="" /></Link>

                                    <XMarkIcon className="h-8 w-8 text-primary " />
                                </div>
                                : <Bars3Icon className="h-8 w-8 text-primary duration-1000 " />
                        }
                        <div className={`${open ? 'left-0 pl-3' : '-left-96'} absolute flex flex-col  duration-1000  p-4 gap-3 `}>

                            <div className='flex gap-6 items-center mt-4'>
                                <HomeIcon className="h-6 w-6 text-primary " />

                                <Link className='font-semibold hover-effect ' to="/home">Home</Link>
                            </div>
                            <div className='flex gap-6 my-4'>
                                <UserPlusIcon className="h-6 w-6 text-primary " />

                                <Link className='hover-effect' to="/logIn"><h1 className='text-[16px] hover-effect  font-bold'> Log in</h1> </Link>
                            </div>
                            <div className='flex gap-6 hover-effect'>
                                <UserPlusIcon className="h-6 w-6 text-primary " />
                                <Link className='font-semibold ' to="/home">Stay safe</Link>
                            </div>
                            <div className='flex gap-6 font-semibold'>
                                <QuestionMarkCircleIcon className="h-6 w-6 text-primary  " />
                                <Link className='hover-effect' to="/home">FAQ</Link>
                            </div>
                            <hr />
                            <div className='flex gap-6 font-semibold '>
                                <EllipsisHorizontalCircleIcon className="h-6 w-6 text-primary " />
                                <Link className='hover-effect' to="/home">More</Link>
                            </div>

                        </div>
                    </span>


                </div>


                <Link to="/"><img className='w-[100px] h-[100px] hidden md:block' src={logo} alt="" /></Link>

                <div className='flex justify-around gap-6 items-center'>
                    <div className='lg:flex gap-2 hidden md:block md:justify-center'>
                        <UserPlusIcon className="h-6 w-6 text-primary " />

                        <Link to="/logIn"><h1 className='text-[16px] hover-effect  font-bold'> Log in</h1> </Link>
                    </div>
                    <button className='btn btn-primary du text-white '>Post Your ad</button>

                </div>
            </div>
            




        </>
    );
};

export default Header;