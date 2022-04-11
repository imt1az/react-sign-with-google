import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const {user,handleSignOut} = useFirebase();
    return (
        <div className=' rounded dark:bg-gray-800  flex  justify-between items-center h-16'>
            
            <h1 className='text-slate-100 font-bold mx-auto text-2xl'>Logo</h1>
            <nav className='text-slate-100 mx-auto'>
                <Link to='/home' className='ml-5 hover:bg-sky-700'>Home</Link>
                { user?.uid ? <button onClick={handleSignOut}  className='ml-5'>Log Out</button>
                    :<Link to='/login' className='ml-5'>Login</Link>}
                <Link to='/registration'className='ml-5' >Registration</Link>
                <Link to='/chart' className='ml-5'>Chart</Link>
                <span className='ml-2 text-yellow-300'>{user && user.displayName}</span>
               
            </nav>
        </div>
    );
};

export default Header;