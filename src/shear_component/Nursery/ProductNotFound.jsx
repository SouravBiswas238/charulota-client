import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProductNotFound = () => {

    const location = useLocation();

    const pathname = (decodeURI(location.pathname)).replace('/product-category/', '').split('/');
    let linkPath = '';

    return (
        <div className='container mx-auto'>
            {/* top navbar part */}
            <div className="flex justify-between text-[.8rem] flex-wrap my-5">
                {/* left nested path */}
                <div className="flex">
                    <nav aria-label="breadcrumb" className="w-full">
                        <ol className="flex h-8 ">
                            <li className="flex items-center">
                                <a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center  text-heading-gray hover:text-heading-black pe-1 ">Home</a>
                            </li>
                            <li className="flex items-center  text-heading-gray hover:text-heading-blackspace-x-1">
                                <span className=" text-heading-gray">/</span>
                                <a rel="noopener noreferrer" href="#" className="flex items-center text-heading-gray hover:text-heading-black px-1">Shop</a>
                            </li>
                            {
                                pathname && pathname?.map((path, index) => {
                                    if (index == 0) {
                                        linkPath += path
                                    }
                                    else {
                                        linkPath += '/' + path
                                    }
                                    return (<Link key={index} to={`/product-category/${linkPath}`} className="flex items-center  text-heading-gray hover:text-heading-blackspace-x-1">
                                        <span className=" text-heading-gray hover:text-heading-black">/</span>
                                        <p rel="noopener noreferrer" className="flex items-center text-heading-black font-medium px-1">{path}</p>
                                    </Link>)
                                })
                            }

                        </ol>
                    </nav>
                </div>

            </div >
            {/* warning message */}
            <div className="flex flex-row pl-2 gap-2 items-center border rounded-lg shadow overflow-hidden bg-warning text-title-primary text-[.87rem] py-4">
                <span className="flex-shrink-0 inline-flex ms-3 w-6 mt-[-.25rem] item-center justify-center leading-none rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-8 w-8">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                    </svg>
                </span>
                <div className="flex-1 p-2">
                    <p className="text-sm">No products were found matching your selection.</p>
                </div>
            </div>
            {/* search for product */}
            <fieldset className="w-full space-y-1 border border-gray-200 my-5 p-3 ">
                <label for="Search" className="hidden">Search</label>
                <div className="relative">

                    <input type="text" name="Search" id="Search" placeholder="Search for products " className="flex flex-1 w-full sm:text-sm  focus:outline-none " />

                    <span className="absolute inset-y-0 right-3 flex items-center pl-2">
                        <button type="button" title="search" className="p-1 focus:outline-none">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-6 h-6 dark:text-gray-100">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                </div>
            </fieldset>
        </div>
    );
};

export default ProductNotFound;