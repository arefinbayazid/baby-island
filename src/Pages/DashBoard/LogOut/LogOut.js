import { LogoutIcon } from '@heroicons/react/outline';
import React from 'react';
import useAuth from '../../../hooks/useAuth';

const LogOut = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="flex items-center justify-center">
            <button onClick={() => { logOut() }} class=" px-6 py-2  transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">
                <LogoutIcon className=" md:h-10 md:w-10" />
                Log Out
            </button>

        </div>
    );
};

export default LogOut;