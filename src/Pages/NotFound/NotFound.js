import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>

            <div className="bg-indigo-900 relative h-full">
                <img src="/error.svg" alt="error" className="absolute h-full w-full object-cover" />
                <div className="inset-0 bg-black opacity-25 absolute">
                </div>
                <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
                    <div className="w-full font-mono flex flex-col items-center relative z-10">
                        <h1 className="font-extrabold text-5xl text-center text-white leading-tight mt-4">
                            You&#x27;re alone here
                        </h1>
                        <Link to="/home" className="font-extrabold text-5xl text-center text-white leading-tight mt-4 p-3 rounded-lg ring-pink-400 border-2 border-black hover:bg-black">Go Home</Link>
                        <p className="font-extrabold text-8xl my-24 text-white animate-bounce text-center">
                            404
                        </p>
                        <p className="font-extrabold text-8xl my-24 text-white text-center">

                            Page not found
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default NotFound;