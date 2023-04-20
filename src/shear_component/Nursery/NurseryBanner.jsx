import React from 'react';
import './shear.css'

const NurseryBanner = ({pageName}) => {
    return (
        <div className="my-1 py-[3rem] mb-[2.5rem] bg-banner text-[#fff]" >
            <div className="container mx-auto">
                <div className="text-center flex justify-center align-middle items-center ">
                    
                <a href="#" className='font-normal hidden lg:flex text-[2.6rem]'>&#8592;</a> 
                <h1 className="text-center text-[2.5rem] lg:text-[4rem] tracking-tighter font-semibold">
                        {pageName}
                    </h1>
                  
                </div>
            </div>
        </div>
    );
};

export default NurseryBanner;