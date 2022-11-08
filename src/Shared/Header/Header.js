import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const menuItems = <>
        <li className='text-xl font-bold text-white'><Link to='/'>Home</Link></li>
        <li className='text-xl font-bold text-white'><Link to='/services'>Services</Link></li>
    </>
    return (
        <div className="navbar h-[6rem] pt-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-light lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="img-holder btn btn-ghost">
                    <img className='header-logo' src={headerLogo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;