import { HandIcon, LogoutIcon, ShoppingCartIcon, StarIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import AddReview from '../AddReview/AddReview';
import AllOrders from '../AllOrders/AllOrders';
import LogOut from '../LogOut/LogOut';
import Pay from '../Pay/Pay';


const DashBoard = () => {
    const [where, setWhere] = useState('myOrders')

    const myOrders = () => {
        setWhere('myOrders')
    }

    const pay = () => {
        setWhere('pay')
    }

    const review = () => {
        setWhere('myReview')
    }

    const logOut = () => {
        setWhere('logOut')
    }
    return (
        <div>
            <div className=" bg-white lg:my-10">
                <nav className=" flex items-center justify-center md:gap-7 lg:gap-10 lg:mx-40" aria-label="Global">
                    <button
                        onClick={myOrders}
                        className="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col w-3/12 min-h-15 justify-center items-center">
                        <ShoppingCartIcon className="w-1/2" />
                        <h1 className="text-xl">My Orders</h1>
                    </button>
                    <button
                        onClick={pay}
                        className="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col w-3/12 min-h-15 justify-center items-center">
                        <HandIcon className="w-1/2" />
                        <h1 className="text-xl">Pay</h1>
                    </button>
                    <button
                        onClick={review}
                        className="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col w-3/12 min-h-15 justify-center items-center">
                        <StarIcon className="w-1/2" />
                        <h1 className="text-xl">Review</h1>
                    </button>
                    <button
                        onClick={logOut}
                        className="md:px-5 md:py-5 px-3 py-1 transition ease-in duration-200 uppercase  rounded md:rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-600 focus:outline-none flex flex-col w-3/12 min-h-15 justify-center items-center">
                        <LogoutIcon className="w-1/2" />
                        <h1 className="text-xl ">Log Out</h1>
                    </button>
                </nav>
            </div >

            {where === 'myOrders' ? <AllOrders></AllOrders> : ''}
            {where === 'pay' ? <Pay></Pay> : ''}
            {where === 'myReview' ? <AddReview></AddReview> : ''}
            {where === 'logOut' ? <LogOut></LogOut> : ''}

        </div>
    );
};

export default DashBoard;