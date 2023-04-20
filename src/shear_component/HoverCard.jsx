import React from 'react';
import { BsCartCheck } from 'react-icons/bs'
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai'
const HoverCard = ({ mainImage, hoverImage, tittle, price, hidden }) => {
    return (
        <div className='bg-[#fff] card-shadow border border-gray-200 relative card-parent overflow-hidden'>
            {/* ccard container */}
            <div className='card-container overflow-hidden'>
                <div className='overflow-hidden'>
                    <img className='main-image relative ' src={mainImage} alt="" />
                    <img className='hover-image absolute top-0 left-0 bottom-0 flex justify-start items-center' src={hoverImage} alt="" />
                </div>
                <div className={`py-[15px] overflow-hidden ${hidden ? "hidden" : ''}  px-[20px]`}>
                    <h1 className='text-nav-color mb-[5px] font-semibold'>{tittle}</h1>
                    <h1 className='text-primary-green text-[.9rem] font-semibold'>{price ? price + '.00৳' : ''}</h1>
                </div>

            </div>
            {/* right side icon for curt */}
            <div className='bg-[#fff]   absolute right-[10px] top-[10px] cart-icons'>
                <div>
                    <div className='w-[45px] h-[45px] flex justify-center items-center text-[1.4rem] cursor-pointer'>
                        <BsCartCheck />
                    </div>
                    <div className='w-[45px] h-[45px] flex justify-center items-center text-[1.4rem] cursor-pointer'>
                        <AiOutlineSearch />
                    </div>
                    <div className='w-[45px] h-[45px] flex justify-center items-center text-[1.4rem] cursor-pointer'>
                        <AiOutlineHeart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverCard;