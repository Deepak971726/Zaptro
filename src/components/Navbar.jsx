import axios from 'axios'
import { MapPin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCaretDown } from 'react-icons/fa'
import { CgClose } from 'react-icons/cg'
import { IoCartOutline } from 'react-icons/io5'
import { useCart } from '../context/cartContext'
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'

const Navbar = () => {
    const [location, setLocation] = useState(null)
    const [showAddAddress, setShowAddAddress] = useState(false)
    const [loading, setLoading] = useState(false)
    const {cartItem} = useCart()
    const {user} = useUser()
    const [userData, setUserData] = useState(null)
    
    
        const geoLocationData= async()=>{
            setLoading((prev)=>!prev)
            try {
                
                const res = await axios.get('https://ipapi.co/json/')
                setLocation(res)
                // console.log(res)
                
            } catch (error) {
                console.log("error while fething user location", error)
            }
            setLoading((prev)=>!prev)
        }
        
        const onClickHandleAddress=()=>{
            
            geoLocationData()
            setShowAddAddress(false)
        }
        
        useEffect(()=>{
            // console.log(user)
            setUserData(user)
            // console.log(user)
        },[user])
       
   
    
    
  return (
    <div className='bg-white py-3 shadow-2xl px-4 md:px-0'>
        <div className='max-w-6xl mx-auto flex justify-between items-center'>
            {/* logo sections */}
            <div className='flex gap-7 items-center  -ml-50'>
                <Link to={'/'}>
                    <h1 className='font-bold text-3xl'>
                        <span className='text-red-500 font-serif'>Z</span>aptro
                    </h1>
                </Link>
                {!loading?<div className='md:flex gap-1 cursor-pointer text-gray-700 items-center hidden'>
                    <MapPin className='text-red-500'/>
                    <span className='font-semibold'>{location? <div className='-space-y-2'>
                            
                            <p>{location.data.city},</p>
                            <p>{location.data.country_name}</p>
                        </div>: "Add Address"}</span>
                         {/* <FaCaretDown/> */}
                         <FaCaretDown onClick={()=>setShowAddAddress((prev)=>!prev)} />
                         { showAddAddress ? 
                         <div className='w-[250px] h-max shadow-2xl z-50 bg-white fixed top-16 left-60 border-2 p-5 border-gray-100 rounded-md'>
                            <h1 className='font-semibold mb-4 text-xl flex justify-between'>
                                Change Location <span onClick={()=>setShowAddAddress((prev)=>!prev)}><CgClose/></span></h1>
                         <button onClick={onClickHandleAddress} className='bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer hover:bg-red-400'>Detect my location</button>
                        </div> : null}
                </div>:"location fetching..."}
                
                {/* menu section */}
                
                <nav className='flex gap-7 items-center ml-50'>
                    <ul className='md:flex gap-7 items-center text-xl font-semibold hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>Home</NavLink>
                        <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>Products</NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>About</NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}>Contact</NavLink>
                    </ul>
                    <Link to={'/cart'} className='relative ml-30'>
                        <IoCartOutline className='h-7 w-7' />
                        <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                    </Link>
                    <div className='hidden md:block ml-20'>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"/>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                     {/* {
                        openNav ? <HiMenuAlt3 onClick={()=>setOpenNav(false)} className='h-7 w-7 md:hidden'/>:<HiMenuAlt1 
                        onClick={()=>setOpenNav(true)}
                        className='h-7 w-7 md:hidden'/>
                    } */}
                    
                </nav>
                {userData?<div className='items-center text-gray-800  shadow-2xl text-xl'>
                    <h1 className='text'>Hello {userData.firstName}  !!</h1>
                </div>:null}
            </div>
        </div>
         {/* <ResponsiveMenu openNav={openNav} setOpenNav={setOpenNav}/> */}
       
    </div>
  )
}

export default Navbar
