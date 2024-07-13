import React from 'react';
import logo from './../assets/logo1.png';
import { HiOutlineShoppingBag } from "react-icons/hi2";
import {Link} from 'react-router-dom';
import { IoLogInOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import Navitems from './Navitems';
import { useRef, useEffect } from 'react';


function Navbar() {
    const inputref = useRef(null);
    useEffect(()=>{
        inputref.current.focus();
    },[]);
  return (
    <nav className='p-4'>
    <div>

        {/* first row */}

        <section className='flex item-center justify-between p-2'>
        <div className='flex space-x-2 bg-slate-500 items-center'>
            <img className='h-8' src={logo}></img>
            <h1 className='text=xl tracking-wide font-semihold'>Shopping</h1>
        </div>
        <div className="w-96"><input ref={inputref} type="text" placeholder="Search" className='w-full p-2 bg-white border border-black rounded-sm m-4'/></div>
        <div className='flex item-center gap-10'>
           <Link to=''><HiOutlineShoppingBag className='text-2xl' />
           <span className='text-xl font-normal hover:underline'>Cart</span>
           </Link>
           <Link to=''><GoHeart  className='text-2xl' />
           <span className='text-xl font-normal hover:underline'>Save</span>
           </Link>
           <Link to=''><IoLogInOutline className='text-2xl' />
           <span className='text-xl font-normal hover:underline'>Sign-in</span>
           </Link>
        </div>
        </section>

        {/* second row */}

        <section >
            <div className='flex items-center justify-center'>
                <ul className='flex space-x-4'>
                    <Navitems to='/home' text='Home'/>
                    <Navitems to='/men' text='Men'/>
                    <Navitems to='/women' text='Women'/>
                    <Navitems to='/child' text='Kids'/>
                </ul>
            </div>
        </section>
    </div>
    </nav>
  )
}

export default Navbar