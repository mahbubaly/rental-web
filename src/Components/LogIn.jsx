import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/24/solid'
import googleLogo from '../Images/google.jpg'
import facebook from '../Images/Facebook.png'

const LogIn = () => {

    const [user, setUser] = useState('');

    const handlerLog = () => {
        const LoggedIn = 123;
        setUser(LoggedIn);


    }

    return (
        <div>
            <div className=" hero  bg-white">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-primary my-7">Login now!</h1>




                    </div>
                    <div className="card  w-full  bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
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

                                    <Link to="/forgotPass" className='text-primary mt-3 hover:underline'>Forgot password? </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={handlerLog} user={user} className="btn btn-primary">Log in</button>
                            </div>

                        </div>
                        <div className='flex p-3 gap-2'>


                            <Link className='flex gap-2 p-3  rounded-lg bg-slate-50 text-center ' to='/google'>
                                <img className='w-[40px] h-[30px]' src={googleLogo} alt="" />
                                <h1>Log in with Google</h1>


                            </Link>
                            <Link className='flex gap-2 p-3  rounded-lg bg-slate-50 text-center ' to='/google'>
                                <img className='w-[40px] h-[30px]' src={facebook} alt="" />
                                <h1>Log in with Google</h1>


                            </Link>
                        </div>
                    </div>


                    <div>
                        <h1 className='font-semibold hover:underline'>Don’t have account? <Link to='/signUp'>  <span className='text-primary'>Sign up</span> </Link></h1>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LogIn;