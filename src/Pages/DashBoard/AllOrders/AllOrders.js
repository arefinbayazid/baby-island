/* This example requires Tailwind CSS v2.0+ */
import { Dialog, Transition } from '@headlessui/react';
import { ExclamationIcon } from '@heroicons/react/outline';
import { Fragment, useEffect, useRef, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const AllOrders = () => {
    const [orderedToy, setOrderedToys] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();
    const [open, setOpen] = useState(false);
    const cancelButtonRef = useRef(null);
    useEffect(() => {
        const url = `https://baby-island.herokuapp.com/myorders/${user.displayName}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrderedToys(data)
                setLoading(false)
            })
    }, []);

    const handleDelete = (orderId) => {
        const url = `https://baby-island.herokuapp.com/order/${orderId}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    const remaining = orderedToy.filter((restPlan) => restPlan._id !== orderId);
                    setOrderedToys(remaining);
                }
            });
        setOpen(false);
    }
    const removeModal = () => {
        setOpen(true);
    };
    return (
        <div className="flex flex-col">
            {loading ? <div className=" w-min p-5 mx-auto my-4 flex justify-center items-center  bg-pink-600 text-white transition ease-in duration-200">
                <svg width="20" height="20" fill="currentColor" className="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                    </path>
                </svg>
                loading
            </div> :
                <div className="-my-2 overflow-x-auto ">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">

                                <tbody className="bg-white divide-y divide-gray-200 ">
                                    {orderedToy.map((toy) => (
                                        <tr key={toy._id} className="flex flex-col md:flex-row">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <img className="h-10 w-10 rounded-full" src={user.photoURL ? user.photoURL : '/default.png'} alt="" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900">{toy.userName}</div>
                                                        <div className="text-sm text-gray-500">{toy.userEmail}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{toy.toyName}</div>
                                                <div className="text-sm text-gray-500">{toy.toyPrice} $</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {toy.toyStatus ? <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    Pending
                                                </span> : <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-pink-100 text-pink-800">
                                                    Delevered
                                                </span>}

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{toy.role}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <button onClick={removeModal} className="text-red-600 hover:text-red-900">
                                                    Remove
                                                </button>
                                            </td>
                                            <Transition.Root show={open} as={Fragment}>
                                                <Dialog
                                                    as="div"
                                                    className="fixed z-10 inset-0 overflow-y-auto"
                                                    initialFocus={cancelButtonRef}
                                                    onClose={setOpen}
                                                >
                                                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                                        <Transition.Child
                                                            as={Fragment}
                                                            enter="ease-out duration-300"
                                                            enterFrom="opacity-0"
                                                            enterTo="opacity-100"
                                                            leave="ease-in duration-200"
                                                            leaveFrom="opacity-100"
                                                            leaveTo="opacity-0"
                                                        >
                                                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                                                        </Transition.Child>

                                                        {/* This element is to trick the browser into centering the modal contents. */}
                                                        <span
                                                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                                                            aria-hidden="true"
                                                        >
                                                            &#8203;
                                                        </span>
                                                        <Transition.Child
                                                            as={Fragment}
                                                            enter="ease-out duration-300"
                                                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                                                            leave="ease-in duration-200"
                                                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                                        >
                                                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                                                    <div className="sm:flex sm:items-start">
                                                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                                                            <ExclamationIcon
                                                                                className="h-6 w-6 text-red-600"
                                                                                aria-hidden="true"
                                                                            />
                                                                        </div>
                                                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                                            <Dialog.Title
                                                                                as="h3"
                                                                                className="text-lg leading-6 font-medium text-gray-900"
                                                                            >
                                                                                Remove Plan
                                                                            </Dialog.Title>
                                                                            <div className="mt-2">
                                                                                <p className="text-sm text-gray-500">
                                                                                    Are You Sure You Want To Remove This Plan?
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                                                    <button
                                                                        type="button"
                                                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                                                        onClick={() => {
                                                                            handleDelete(toy._id);
                                                                        }}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                    <button
                                                                        type="button"
                                                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                                        onClick={() => setOpen(false)}
                                                                        ref={cancelButtonRef}
                                                                    >
                                                                        Cancel
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </Transition.Child>
                                                    </div>
                                                </Dialog>
                                            </Transition.Root>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

            }





        </div>
    );
};

export default AllOrders;