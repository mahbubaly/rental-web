import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg'
import { UserPlusIcon, MapPinIcon, XMarkIcon, Bars3Icon, QuestionMarkCircleIcon, EllipsisHorizontalCircleIcon, HomeIcon } from '@heroicons/react/24/solid'
import '../Components/Css/Style.css'
import Section from './Section';
import ActiveLink from './ActiveLink';

const Header = () => {
    const [open, setOpen] = useState(false);





    return (
        <>

            <div className='flex justify-between  bg-white p-3 items-center'>
                <div onClick={() => setOpen(!open)} className='md:hidden'>
                    <span className={`bg-${open ? 'black' : 'white'} w-96 duration-1000`}>
                        {open === true ? (
                            <div className='flex gap-14 duration-1000  p-2'>
                                
                                <ActiveLink to='/'>
                                    <img className='w-[40px] h-[30px]' src={logo} alt='' />
                                </ActiveLink>
                                <XMarkIcon className='h-8 w-8 text-primary' />
                            </div>
                        ) : (
                            <Bars3Icon className='h-8 w-8 text-primary duration-1000' />
                        )}
                        <div
                            className={`${open ? 'bg-slate-300 text-primary p-3 w-[80%] left-0 pl-3' : '-left-96'
                                } absolute flex flex-col duration-1000 gap-3`}
                        >
                            <div className='flex gap-6 items-center mt-4'>
                                <HomeIcon className='h-6 w-6 text-primary' />
                                <ActiveLink className='font-semibold hover-effect' to='/'>
                                    Home
                                </ActiveLink>
                            </div>
                            <div className='flex gap-6 my-4'>
                                <UserPlusIcon className='h-6 w-6 text-primary' />
                                <ActiveLink className='hover-effect' to='/logIn'>
                                    <h1 className='text-[16px] hover-effect font-bold'> Log in</h1>{' '}
                                </ActiveLink>
                            </div>
                            <div className='flex gap-6 '>
                                <UserPlusIcon className='h-6 w-6 text-primary' />
                                <ActiveLink className='font-semibold hover-effect' to='/home'>
                                    Stay safe
                                </ActiveLink>
                            </div>
                            <div className='flex gap-6 font-semibold'>
                                <QuestionMarkCircleIcon className='h-6 w-6 text-primary' />
                                <ActiveLink className='hover-effect' to='/faq'>
                                    FAQ
                                </ActiveLink>
                            </div>
                            <hr />
                            <div className='flex gap-6 font-semibold '>
                                <EllipsisHorizontalCircleIcon className='h-6 w-6 text-primary' />
                                <ActiveLink className='hover-effect' to='/more'>
                                    More
                                </ActiveLink>
                            </div>
                        </div>
                    </span>
                </div>


                <Link to="/"><img className='w-[100px] h-[100px] hidden md:block' src={logo} alt="" /></Link>

                <div className='flex justify-around gap-6 items-center'>
                    <div className='lg:flex gap-2 hidden md:block md:justify-center'>
                        <UserPlusIcon className="h-6 w-6 text-primary " />

                        <ActiveLink to="/logIn"><h1 className='text-[16px] hover-effect  font-bold'> Log in</h1> </ActiveLink>
                    </div>
                    <button className='btn btn-primary du text-white '>Post Your ad</button>

                </div>
            </div>
            








        </>
    );
};

export default Header;