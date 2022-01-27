import React from 'react';
import { Link } from 'react-router-dom';

const ProductsCard = ({ product }) => {
    const { image, name, description, price } = product;
    return (
        <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
            <a href="/" className="w-full block h-full">
                <img alt="blog" src={image} className="max-h-40 w-full object-cover" />
                <div className="bg-white dark:bg-gray-800 w-full p-4">
                    <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                        {name}
                    </p>
                    <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                        {description.split(/[@]/)[0]}
                    </p>
                    <div className="mt-0 p-4 flex justify-between items-center rounded hover:bg-pink-200">
                        <p className="font-bold text-2xl ">{price + ' '}$</p>
                        <Link className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-500 focus:outline-none flex w-max" to={`/buy/${product._id}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span>buy now</span>
                        </Link>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default ProductsCard;