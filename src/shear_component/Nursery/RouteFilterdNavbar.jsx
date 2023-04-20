import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import './shear.css'


const RouteFilterdNavbar = () => {
    const [showSection, setShowSection] = useState(false);
    const [selectedSort, setSelectedSort] = useState("");
    const [selectedPriceRange, setSelectedPriceRange] = useState("All");
    const [selectedColor, setSelectedColor] = useState("");

    const handleClick = () => {
        setShowSection(!showSection);
    };

    const location = useLocation();

    const pathname = (decodeURI(location.pathname)).replace('/product-category/', '').split('/');
    let linkPath = '';

    const handleSortChange = (value) => {
        setSelectedSort(value);
        console.log(value)
    };

    const handlePriceRangeChange = (value) => {
        setSelectedPriceRange(value);
        console.log(value)

    };
    const handleColorChange = (value) => {
        setSelectedColor(value);
        console.log(value)

    };



    const sortOptions = [
        { value: "popularity", label: "Popularity" },
        { value: "rating", label: "Average rating" },
        { value: "newness", label: "Newness" },
        { value: "price_low_to_high", label: "Price: low to high" },
        { value: "price_high_to_low", label: "Price: high to low" },
    ];

    const priceRangeOptions = [
        { value: "All", label: "All" },
        { value: "0-1250", label: "0.00৳ - 1,250.00৳" },
        { value: "1250-2500", label: "1,250.00৳ - 2,500.00৳" },
        { value: "2500-3750", label: "2,500.00৳ - 3,750.00৳" },
        { value: "3750-5000", label: "3,750.00৳ - 5,000.00৳" },
    ];
    const colorOption = [
        { value: "গোলাপি", label: "গোলাপি", color: 'bg-[#ec4899]' },
        { value: "বেগুনী", label: "বেগুনী", color: 'bg-[#8f00ff]' },
        { value: "লাল", label: "লাল", color: 'bg-[#dd3333]' },
        { value: "সাদা", label: "সাদা", color: 'bg-[#0000001a]' },
        { value: "হলুদ", label: "হলুদ", color: 'bg-[#fefb4a]' },
    ];
    return (
        <div className='container mx-auto'>
            {/* navbar for filter */}
            <div className="flex justify-between text-[.8rem] flex-wrap">
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
                {/* right side filter and show*/}
                <div className="flex">
                    <nav aria-label="breadcrumb" className="w-full hidden lg:flex mr-1">
                        {/* show result button */}
                        <ol className="flex h-8 ">
                            <li className="flex items-center">
                                <a rel="noopener noreferrer" href="#" title="Back to homepage" className="flex items-center text-heading-black font-medium">Show :</a>
                            </li>
                            <li className="flex items-center">
                                <a rel="noopener noreferrer" href="#" className="flex items-center  text-heading-gray hover:text-heading-black px-1">20</a>
                            </li>
                            <li className="flex items-center">
                                <span className=" text-heading-gray">/</span>
                                <a rel="noopener noreferrer" href="#" className="flex items-center  text-heading-gray hover:text-heading-black px-1">40</a>
                            </li>
                            <li className="flex items-center">
                                <span className=" text-heading-gray">/</span>
                                <a rel="noopener noreferrer" href="#" className="flex items-center  text-heading-gray hover:text-heading-black px-1">60</a>
                            </li>
                            <li className="flex items-center">
                                <span className=" text-heading-gray">/</span>
                                <a rel="noopener noreferrer" href="#" className="flex items-center  text-heading-gray hover:text-heading-black  px-1">100</a>
                            </li>
                        </ol>
                        {/* grid icons  */}
                        <ol className="flex h-8 mx-3 text-heading-gray">
                            <li className="flex items-center  text-heading-gray hover:text-heading-black px-1">
                                <svg className='text-heading-gray' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="19px" height="19px" viewBox="0 0 19 19" enableBackground="new 0 0 19 19" xmlSpace="preserve">
                                    <rect width="4" height="4"></rect>
                                    <rect x="5" width="4" height="4"></rect>
                                    <rect x="10" width="4" height="4"></rect>
                                    <rect x="15" width="4" height="4"></rect>
                                    <rect y="5" width="4" height="4"></rect>
                                    <rect x="5" y="5" width="4" height="4"></rect>
                                    <rect x="10" y="5" width="4" height="4"></rect>
                                    <rect x="15" y="5" width="4" height="4"></rect>
                                    <rect y="15" width="4" height="4"></rect>
                                    <rect x="5" y="15" width="4" height="4"></rect>
                                    <rect x="10" y="15" width="4" height="4"></rect>
                                    <rect x="15" y="15" width="4" height="4"></rect>
                                    <rect y="10" width="4" height="4"></rect>
                                    <rect x="5" y="10" width="4" height="4"></rect>
                                    <rect x="10" y="10" width="4" height="4"></rect>
                                    <rect x="15" y="10" width="4" height="4"></rect>
                                </svg>
                            </li>
                            <li className="flex items-center  text-heading-gray hover:text-heading-black px-1">
                                <a rel="noopener noreferrer" href="#" className="flex items-center  text-heading-gray hover:text-heading-black  capitalize hover:underline"><svg version="1.1" id="b12" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="19px" viewBox="0 0 24 19" enableBackground="new 0 0 24 19" xmlSpace="preserve">
                                    <rect width="4" height="4"></rect>
                                    <rect x="5" width="4" height="4"></rect>
                                    <rect x="10" width="4" height="4"></rect>
                                    <rect x="15" width="4" height="4"></rect>
                                    <rect x="20" width="4" height="4"></rect>
                                    <rect y="5" width="4" height="4"></rect>
                                    <rect x="5" y="5" width="4" height="4"></rect>
                                    <rect x="10" y="5" width="4" height="4"></rect>
                                    <rect x="15" y="5" width="4" height="4"></rect>
                                    <rect x="20" y="5" width="4" height="4"></rect>
                                    <rect y="10" width="4" height="4"></rect>
                                    <rect x="5" y="10" width="4" height="4"></rect>
                                    <rect x="10" y="10" width="4" height="4"></rect>
                                    <rect x="15" y="10" width="4" height="4"></rect>
                                    <rect x="20" y="10" width="4" height="4"></rect>
                                    <rect y="15" width="4" height="4"></rect>
                                    <rect x="5" y="15" width="4" height="4"></rect>
                                    <rect x="10" y="15" width="4" height="4"></rect>
                                    <rect x="15" y="15" width="4" height="4"></rect>
                                    <rect x="20" y="15" width="4" height="4"></rect>
                                </svg></a>
                            </li>
                            <li className="flex items-center  text-heading-gray hover:text-heading-black px-1">
                                <a rel="noopener noreferrer" href="#" className="flex items-center  text-heading-gray hover:text-heading-black  capitalize hover:underline">
                                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="23px" height="19px" viewBox="0 0 23 19" enableBackground="new 0 0 23 19" xmlSpace="preserve">
                                        <rect width="3" height="4"></rect>
                                        <rect x="4" width="3" height="4"></rect>
                                        <rect x="8" width="3" height="4"></rect>
                                        <rect x="12" width="3" height="4"></rect>
                                        <rect x="16" width="3" height="4"></rect>
                                        <rect x="20" width="3" height="4"></rect>
                                        <rect y="5" width="3" height="4"></rect>
                                        <rect x="4" y="5" width="3" height="4"></rect>
                                        <rect x="8" y="5" width="3" height="4"></rect>
                                        <rect x="12" y="5" width="3" height="4"></rect>
                                        <rect x="16" y="5" width="3" height="4"></rect>
                                        <rect x="20" y="5" width="3" height="4"></rect>
                                        <rect y="10" width="3" height="4"></rect>
                                        <rect x="4" y="10" width="3" height="4"></rect>
                                        <rect x="8" y="10" width="3" height="4"></rect>
                                        <rect x="12" y="10" width="3" height="4"></rect>
                                        <rect x="16" y="10" width="3" height="4"></rect>
                                        <rect x="20" y="10" width="3" height="4"></rect>
                                        <rect y="15" width="3" height="4"></rect>
                                        <rect x="4" y="15" width="3" height="4"></rect>
                                        <rect x="8" y="15" width="3" height="4"></rect>
                                        <rect x="12" y="15" width="3" height="4"></rect>
                                        <rect x="16" y="15" width="3" height="4"></rect>
                                        <rect x="20" y="15" width="3" height="4"></rect>
                                    </svg></a>
                            </li>
                        </ol>
                    </nav>
                    {/* filterd button */}
                    <button
                        className="flex items-center font-medium text-heading-black text-[.9rem]"
                        onClick={handleClick}
                    >
                        <span className=""><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"></path></svg></span>
                        <span className="px-1">Filters</span>

                    </button>
                </div >
            </div >

            {/* filter section dropdown */}
            < div className=' text-[.8rem]' >
                <div
                    className={`transition-all duration-300 ${showSection ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 overflow-hidden"
                        }`}
                >
                    {/* diviver */}
                    <div className=' border-b-2 border-gray-200'></div>
                    <div className='flex'>
                        {/* left two search shortby and price range */}
                        <div className="w-1/2 py-2 pt-3">
                            <div className="flex flex-wrap justify-between items-center">
                                <div className="w-full md:w-1/2 px-2">
                                    <label htmlFor="sort" className="block font-medium text-heading-black mb-2 text-[1rem]">
                                        Sort by:
                                    </label>
                                    <ul className="">
                                        {sortOptions?.map((option) => (
                                            <li
                                                key={option.value}
                                                className={` py-2 cursor-pointer ${selectedSort === option.value ? "font-medium text-heading-black" : "text-heading-gray"
                                                    }`}
                                                onClick={() => handleSortChange(option.value)}
                                            >
                                                {option.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="w-full md:w-1/2 px-2">
                                    <label htmlFor="price_range" className="block font-medium text-heading-black mb-2 text-[1rem]">
                                        Price range:
                                    </label>
                                    <ul className="">
                                        {priceRangeOptions?.map((option) => (
                                            <li
                                                key={option.value}
                                                className={`py-2 cursor-pointer ${selectedPriceRange === option.value ? "font-medium text-heading-black" : "text-heading-gray"
                                                    }`}
                                                onClick={() => handlePriceRangeChange(option.value)}
                                            >
                                                {option.label}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Right part color if have */}
                        <div className="w-1/2 py-2 pt-3">
                            <div className="flex flex-wrap justify-between items-center">
                                {
                                    pathname[0] == 'ফুল-গাছ' &&
                                    <div className="w-full md:w-1/2 px-2">
                                        <label htmlFor="sort" className="block font-medium text-heading-black mb-2 text-[1rem]">
                                            FILTER BY COLOR
                                        </label>
                                        <ul className="">
                                            {colorOption && colorOption?.map((option) => (
                                                <li
                                                    key={option.value}
                                                    className={`color-text-hover flex items-center justify-between py-2 cursor-pointer ${selectedColor === option.value ? "font-medium text-heading-black" : "text-heading-gray"
                                                        }`}
                                                    onClick={() => handleColorChange(option.value)}
                                                >
                                                    <span className='flex'>
                                                        <span className={`${option.color} rounded-full text-[1.2rem] hover:opacity-100 text-[#fff]`}>
                                                            {
                                                                <AiOutlineCheck className={`rounded-full ${selectedColor === option.value ? " opacity-100 font-medium bg-primary-green text-[#fff] " : 'opacity-0 color-icon '} 
                                                            `} />
                                                            }
                                                        </span>
                                                        <span className='px-1 '>
                                                            {option.label}
                                                        </span>
                                                    </span>
                                                    <span className={`color-bg  border-gray-200 rounded-full border px-2  ${selectedColor === option.value ? "font-medium text-heading-black bg-primary-green" : ""
                                                        }`}>

                                                        2
                                                    </span>

                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                }

                            </div>
                        </div>
                    </div>

                    {/* divider */}
                    <div className='border-b-2 mb-[2rem] mt-[1rem] border-gray-200'></div>
                </div>
            </div >

            {/* total product in Gelary */}
            < div className={`transition-all duration-300 ${showSection ? "" : "lg:translate-y-[-16rem] translate-y-[-32rem]"
                }`} >
                <section className=" dark:bg-gray-800 dark:text-gray-50">
                    <div className="container grid grid-cols-2 gap-4  mx-auto md:grid-cols-4">
                        <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                        <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                        <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                    </div>
                </section>
            </div >

        </div >

    );
};
export default RouteFilterdNavbar;