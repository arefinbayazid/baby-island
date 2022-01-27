import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Buy = () => {
    const { toyId } = useParams();
    const { user } = useAuth();
    const [toy, setToy] = useState([]);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const orderedToy = {
        userName: user.displayName,
        userEmail: user.email,
        userAddress: address,
        userPhone: phone,
        orderedToy: toyId,
        toyName: toy.name,
        toyImage: toy.image,
        toyStatus: toy.pending,
        toyPrice: toy.price
    }
    const handleForm = (e) => {
        e.preventDefault();
        fetch('https://baby-island.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedToy)
        })
            .then(res => res.json())
            .then(data => {
                alert("Done!");
            })
    }

    useEffect(() => {
        const url = `https://baby-island.herokuapp.com/buy/${toyId}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setToy(data));
    }, []);
    const { description, name, image } = toy;
    return (
        <div>
            <div className=" dark:bg-gray-800 flex z-20 items-center">
                <div className="container mx-auto px-6 flex md:flex-row-reverse flex-col-reverse py-16">
                    <div className="bg-white rounded-lg shadow  sm:mx-auto md:w-1/2">
                        <div className="px-4 py-8 sm:px-10">
                            <div className=" mt-6">
                                <div className=" inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300">
                                    </div>
                                </div>
                                <div className=" flex justify-center text-sm leading-5">
                                    <span className="px-2 text-gray-500 bg-white">
                                        {name ? name : ''}
                                    </span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <form className="w-full space-y-6" onSubmit={handleForm}>
                                    <div className="w-full">
                                        <div className="  ">
                                            <input required aria-required="true" type="text" readOnly aria-readonly id="search-form-name" value={user.displayName} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="  ">
                                            <input required aria-required="true" type="text" readOnly aria-readonly id="search-form-email" value={user.email} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="  ">
                                            <input required aria-required="true" type="text" onChange={(e) => setAddress(e.target.value)} id="search-form-address" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your address" />
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="  ">
                                            <input required aria-required="true" type="tel" onChange={(e) => setPhone(e.target.value)} id="search-form-phone" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your phone" />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="block w-full rounded-md shadow-sm">
                                            <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ">
                                                Buy
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                            <p className="text-xs leading-5 text-gray-500">
                                Address And Phone Is Required
                            </p>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 md:w-1/2">
                        <div className="text-start py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20 lg:flex items-center ">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                                    <span className="text-pink-500">
                                        {name ? name : ''}
                                    </span>
                                </h2>
                                <p className="text-xl mt-4 text-gray-400">
                                    {description?.split(/[@]/)[0]}
                                </p>
                            </div>
                            <img src={image ? image : ''} alt={name ? name : ''} className="lg:w-1/2" />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Buy;