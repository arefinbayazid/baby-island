import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const handleForm = (e) => {
        e.preventDefault();
    }
    const { error, setError, signInUsingGoogle, signInUsingGithub, createUserWithEmail, emailChange, passChange, nameChange, formEmail, formPass, formName } = useAuth();
    return (
        <div className="bg-white dark:bg-gray-800">
            {error ?
                <div className="bg-red-500 flex items-center text-white text-sm font-bold px-4 py-3 relative w-full" role="alert">
                    <svg width="20" height="20" fill="currentColor" className="w-4 h-4 mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1216 1344v128q0 26-19 45t-45 19h-512q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h64v-384h-64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h384q26 0 45 19t19 45v576h64q26 0 45 19t19 45zm-128-1152v192q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-192q0-26 19-45t45-19h256q26 0 45 19t19 45z">
                        </path>
                    </svg>
                    <p>
                        {error}
                    </p>
                    <button className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => { setError('') }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="h-6 w-6 text-white" viewBox="0 0 1792 1792">
                            <path d="M1490 1322q0 40-28 68l-136 136q-28 28-68 28t-68-28l-294-294-294 294q-28 28-68 28t-68-28l-136-136q-28-28-28-68t28-68l294-294-294-294q-28-28-28-68t28-68l136-136q28-28 68-28t68 28l294 294 294-294q28-28 68-28t68 28l136 136q28 28 28 68t-28 68l-294 294 294 294q28 28 28 68z">
                            </path>
                        </svg>
                    </button>
                </div>
                : ''}

            <div className="flex md:flex-row flex-col-reverse justify-around item-center px-4 py-6 overflow-hidden sm:px-6 sm:py-8 lg:p-12 xl:p-16">
                <div>
                    <h2 className="text-2xl font-semibold font-display text-black dark:text-white sm:text-3xl">
                        Login with Google or Github
                    </h2>
                    <p className="mt-2 max-w-xl text-base text-gray-400">
                        You can login with google and github by just clicking the button below
                    </p>
                    <div className="sm:flex gap-4 jusitfy-start mt-6">
                        <button type="button" onClick={signInUsingGoogle} className="py-2 px-4 my-3 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <FaGoogle className="mx-2" />
                            Google
                        </button>
                        <button type="button" onClick={signInUsingGithub} className="py-2 px-4 my-3 flex justify-center items-center  bg-green-600 hover:bg-green-700 focus:ring-green-500 focus:ring-offset-green-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            <FaGithub className="mx-2" />
                            Github
                        </button>
                    </div>
                </div>

                <div className="lg:block ">

                    <div className="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl dark:text-white">
                            Create a new account
                        </div>
                        <span className="justify-center text-sm text-center text-gray-500 flex-items-center dark:text-gray-400">   Already have an account ?
                            <Link to="/login" className="text-sm text-pink-500 underline hover:text-pink-700">
                                Sign in
                            </Link>
                        </span>
                        <div className="p-6 mt-8">
                            <form onSubmit={handleForm}>
                                <div className="flex flex-col mb-2">
                                    <div className=" relative ">
                                        <input
                                            onChange={nameChange}
                                            id="name"
                                            name="name"
                                            type="text"
                                            autoComplete="first-name"
                                            required
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <div className=" relative ">
                                        <input
                                            onChange={emailChange}
                                            id="email-address"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-2">
                                    <div className=" relative ">
                                        <input
                                            onChange={passChange}
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                                            placeholder="Password"
                                        />
                                    </div>
                                </div>
                                <div>
                                    {error ? <p className="text-red-600 font-bold">{error}</p> : ''}
                                </div>
                                <div className="flex w-full my-4">
                                    <button
                                        type="submit"
                                        onClick={() => { createUserWithEmail(formEmail, formPass, formName) }}
                                        className="py-2 px-4  bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 focus:ring-offset-pink-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                    >
                                        Register
                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;