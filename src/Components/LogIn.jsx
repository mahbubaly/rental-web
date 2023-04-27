import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/24/solid'
import googleLogo from '../Images/google.jpg'
import facebook from '../Images/Facebook.png'

const LogIn = () => {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');

    const handlerLog = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;
        setEmail(email);
        console.log(email , password);
    }


    return (
        <>







            <div className="   ">
                <div className="lg:flex my-7 justify-center items-center gap-16">
                    <div className="text-center lg:text-right ">
                        <div className="mockup-phone hover:shadow-2xl  border-primary">
                            <div className="camera"></div>
                            <div className="display">
                                <div className="artboard artboard-demo phone-1 text-primary font-xl">Loading... </div>
                            </div>
                        </div>
                    </div>


                    <div className='p-3 md:p-5 lg:p-0 '> 


                        <div className="text-center scroll-container ">
                            <h1 className="text-5xl font-bold  scroll-content  text-primary my-7">Log in now!!</h1>
                        </div>


                        <div className="card bg-white w-full hover:shadow-2xl  ">
                            <form onSubmit={handlerLog} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text text-[16px] font-semibold">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text text-[16px] font-semibold">Password</span>
                                    </label>
                                    <input type="password" required name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">

                                        <Link to="/forgotPass" className='text-primary mt-3 hover:underline'>Forgot password? </Link>
                                    </label>
                                </div>
                                <div className="form-control ">


                                    <button onClick={handlerLog} className="btn btn-primary text-[18px] text-white">
                                        Log in</button>


                                </div>

                            </form>
                            <div className='lg:flex p-3 gap-2 justify-center'>


                                <Link className='flex p-2 justify-center items-center  rounded-lg bg-slate-50 text-center ' to='/google'>
                                    <img className='w-[40px] h-[30px]' src={googleLogo} alt="" />
                                    <h1>Log in with Google</h1>


                                </Link>
                                <Link className='flex mt-4 lg:mt-0 p-2 justify-center items-center rounded-lg bg-slate-50 text-center ' to='/facebook'>
                                    <img className='w-[40px] h-[30px]' src={facebook} alt="" />
                                    <h1>Log in with Facebook</h1>


                                </Link>
                            </div>
                            <div className='mx-auto my-3'>
                                <Link to='/signUp'> <h1 className='font-semibold  hover:underline'>Don’t have account? <span className='text-primary'>Sign up</span></h1> </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default LogIn;