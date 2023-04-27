import React from 'react';

const Footer = () => {
    return (
        <div >

            <div className='bg-primary'>
                <footer className="footer container mx-auto  p-10  text-white">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                    <div>
                        <span className="footer-title">Help</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div>

            <div className='bg-slate-500'>
                <footer className="footer footer-center container mx-auto p-4  text-white">
                    <div>
                        <p>Copyright © 2023 - All right reserved by Mahbubur Rahman</p>
                    </div>
                </footer>
            </div>

        </div>
    );
};

export default Footer;