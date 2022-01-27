
import { Link } from 'react-router-dom';

const ExploreCard = ({ product }) => {
    return (

        <div className="group shadow-2xl rounded-lg hover:bg-pink-100">
            <div className=" w-full min-h-60 bg-gray-200  aspect-w-1 aspect-h-1  overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="">
                <div className="mt-4 p-4 flex flex-col justify-between">
                    <h3 className="text-xl text-gray-700">
                        {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{product.description}</p>

                </div>
                <div className="mt-0 p-4 flex justify-between items-center border rounded hover:bg-pink-200">
                    <p className="font-bold text-2xl ">{product.price + ' '}$</p>
                    <Link className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-pink-500 hover:text-white border-2 border-pink-500 focus:outline-none flex w-max" to={`/buy/${product._id}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        <span>buy now</span>
                    </Link>
                </div>
            </div>
        </div>

        /* 
        /* 
        /* 
         */
        /*  
        */
        // <div className="flex max-w-md bg-gray-300 shadow-lg rounded-lg overflow-hidden">
        //     <div className="">
        //         <img className="w-full h-full object-center object-cover lg:w-full lg:h-full" src={product.imageSrc} alt={product.imageAlt} />
        //     </div>
        //     <div className="w-2/3 p-4">
        //         <h1 className="text-gray-900 font-bold text-2xl">
        //             Tomorow
        //         </h1>
        //         <p className="mt-2 text-gray-600 text-sm">
        //             You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
        //         </p>
        //         <div className="flex item-center mt-2">
        //             <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
        //                 <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
        //                 </path>
        //             </svg>
        //         </div>
        //         <div className="flex item-center justify-between mt-3">
        //             <h1 className="text-gray-700 font-bold text-xl">
        //                 $220
        //             </h1>
        //             <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
        //                 Add to Card
        //             </button>
        //         </div>
        //     </div>
        // </div>
    );
};

/* 

<div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="w-1/3 bg-cover bg-landscape">
    </div>
    <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl">
            Tomorow
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
            You can&#x27;t buy your future, but you can do it. Money is nothing, you&#x27;r everything.
        </p>
        <div className="flex item-center mt-2">
            <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                </path>
            </svg>
        </div>
        <div className="flex item-center justify-between mt-3">
            <h1 className="text-gray-700 font-bold text-xl">
                $220
            </h1>
            <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                Add to Card
            </button>
        </div>
    </div>
</div>

*/


export default ExploreCard;