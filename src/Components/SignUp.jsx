import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/24/solid'
import googleLogo from '../Images/google.jpg'
import facebook from '../Images/Facebook.png'

const SignUp = () => {
    const [user, setUser] = useState('');

    const handlerLog = () => {
        const LoggedIn = 123;
        setUser(LoggedIn);


    }
    return (
        <>
            <div className=" hero  bg-white">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-primary my-7">Welcome again!!</h1>




                    </div>
                    <div className="card  w-full  bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label md:flex justify-center md:my-4 ">
                                    <span className="label-text text-center font-semibold text-primary text-xl">Create Your own account!!</span>
                                </label>
                                <label className="label">
                                    <span className="label-text">Enter first name</span>
                                </label>
                                <input type="text" name='email' placeholder="Name" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Enter last name</span>
                                </label>
                                <input type="text" name='email' placeholder="Name" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <span className="label-text">Confirmed password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">

                                    <Link to="/forgotPass" className='text-primary mt-3 hover:underline'>Forgot password? </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handlerLog} user={user} className="btn btn-primary">Sign in</button>
                            </div>

                        </div>
                        <div className='flex p-3 gap-2'>


                            <Link className='flex gap-2 p-3  rounded-lg bg-slate-50 text-center ' to='/google'>
                                <img className='w-[40px] h-[30px]' src={googleLogo} alt="" />
                                <h1>Log in with Google</h1>


                            </Link>
                            <Link className='flex gap-2 p-3  rounded-lg bg-slate-50 text-center ' to='/google'>
                                <img className='w-[40px] h-[30px]' src={facebook} alt="" />
                                <h1>Log in with Facebook</h1>


                            </Link>
                        </div>
                    </div>


                    <div>
                        
                        <Link to="/logIn"> <h1 className='font-semibold hover:underline'>Already have an account?   <span className='text-primary'>Log in</span> </h1></Link>
                    </div>

                </div>
            </div>



        </>
    );
};

export default SignUp;