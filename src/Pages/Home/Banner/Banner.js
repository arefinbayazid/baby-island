import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="bg-white dark:bg-gray-800 lg:flex lg:items-center">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-4xl font font-extrabold tracking-tight text-gray-900 hover:text-pink-500 sm:text-6xl">
                    <span className="block">
                        Buy Toys For Your Newborn Baby
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                    You can buy any types of toy from here for babies aged from 1 year to ∞. We store a varity of collections. Just add to cart and buy the toy for your baby. also you can contact us for any help to choose what to buy.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <Link to="/explore" className="py-4 px-9  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src="https://image.freepik.com/free-photo/two-little-baby-girls-playing-with-toys-inflatable-pool-summer-sunny-day_155003-16124.jpg" className="rounded-lg w-1/2" alt="Tree" />
                <div>
                    <img src="https://image.freepik.com/free-photo/two-year-kid-bathes-with-toys_1398-669.jpg" className="rounded-lg mb-8" alt="Tree" />
                    <img src="https://image.freepik.com/free-photo/little-toddler-boy-bathing-park_1303-15972.jpg" className="rounded-lg" alt="Tree" />
                </div>
            </div>
        </div>

    );
};

export default Banner;



{/* <div className="bg-white dark:bg-gray-800 lg:flex lg:items-center">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-4xl font font-extrabold tracking-tight text-gray-900 hover:text-pink-500 sm:text-6xl">
                    <span className="block">
                        Buy Toys For Your Newborn Baby
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                    You can buy any types of toy from here for babies aged from 1 year to ∞. We store a varity of collections. Just add to cart and buy the toy for your baby. also you can contact us for any help to choose what to buy.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <Link to="/explore" className="py-4 px-9  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src="https://image.freepik.com/free-photo/two-little-baby-girls-playing-with-toys-inflatable-pool-summer-sunny-day_155003-16124.jpg" className="rounded-lg w-1/2" alt="Tree" />
                <div>
                    <img src="https://image.freepik.com/free-photo/two-year-kid-bathes-with-toys_1398-669.jpg" className="rounded-lg mb-8" alt="Tree" />
                    <img src="https://image.freepik.com/free-photo/little-toddler-boy-bathing-park_1303-15972.jpg" className="rounded-lg" alt="Tree" />
                </div>
            </div>
        </div> */}

/*

 <div className="flex items-center space-x-6 lg:space-x-8">
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg  sm:opacity-0 lg:opacity-100">
                                                <img
                                                    src="https://image.freepik.com/free-photo/two-little-baby-girls-playing-with-toys-inflatable-pool-summer-sunny-day_155003-16124.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src="https://image.freepik.com/free-photo/two-year-kid-bathes-with-toys_1398-669.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src="https://image.freepik.com/free-photo/little-toddler-boy-bathing-park_1303-15972.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src="https://image.freepik.com/free-photo/front-view-children-playing-together-kindergarten_23-2148633303.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src="https://image.freepik.com/free-photo/two-little-girls-playing-with-toys-yellow-isolated-background_89411-854.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                                            <div className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src="https://image.freepik.com/free-photo/kid-playing-with-colorful-wooden-abacus_53876-137649.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                            <div className="w-44 h-64 rounded-lg ">
                                                <img
                                                    src="https://image.freepik.com/free-photo/beautiful-little-girl-playing-with-large-educational-toy-yellow-background-with-space-text_208700-1105.jpg"
                                                    alt=""
                                                    className="w-full h-full object-center object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>

*/