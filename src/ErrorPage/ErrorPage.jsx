import React from 'react';
import logo from "../assets/error.png";

const ErrorPage = () => {
    return (
        <div className='w-full mx-auto'>
            <img className='w-10/12 mx-auto' src={logo} alt="" />
        </div>
    );
};

export default ErrorPage;