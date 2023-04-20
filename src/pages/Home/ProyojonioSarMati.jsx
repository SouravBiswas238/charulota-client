import React from 'react';
import hoverImage1 from '../../assets/images/hoverImage1.jpg';
import organicFartilizer from '../../assets/images/Organic-Fartilizer1.jpg';
import hoverImage from '../../assets/images/Horn-Meal-430x430.jpg'
import HoverCard from '../../shear_component/HoverCard';
import HoverCardSm from '../../shear_component/Home/HoverCardSm';


const ProyojonioSarMati = () => {
    return (
        <div className='container mx-auto py-8'>
            <div className='relative'>
                <div className='border-b-2 border-gray-300'>
                    <h1 className='text-[1.3rem] font-medium pb-3'>প্রয়োজনীয় সার-মাটি ও কীটনাশক</h1>
                </div>
                <div className='absolute border-b-2 border-primary-color w-[19rem] bottom-0 left-0 z-10'></div>
            </div>


            <div className="lg:px-4">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="lg:w-1/3 lg:px-5">
                        <div className='bg-[#fff] card-shadow border border-gray-200 relative card-parent overflow-hidden'>
                            {/* card container */}
                            <div className='card-container '>
                                <div className='overflow-hidden md:hidden lg:flex'>
                                    <img className='main-image relative ' src={organicFartilizer} alt="" />
                                    <img className='hover-image absolute top-0 left-0 bottom-0 flex justify-start items-center' src={organicFartilizer} alt="" />
                                </div>
                            </div>
                            {/* button for bottom */}
                            <div className='absolute left-0 bottom-[0px] w-full'>
                                <div className='bg-[#000] text-title-primary lg:w-60  p-5'>
                                    <div>
                                        <h2 className='text-[1.5rem] font-semibold lg:py-5'>১০০% জৈব সার, মাটি ও কীটনাশক কিনুন</h2>
                                        <a className='text-[.9rem] w-[40%] border-b-2 hover:border-primary-color border-[#fff] hidden lg:flex' href="#">আরও দেখুন</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 grid-cols-2 text-sm gap-x-1 gap-y-1 lg:w-2/3 lg:grid-cols-5">

                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                        <HoverCardSm tittle={'শিং কুচি'} hoverImage={hoverImage1} mainImage={hoverImage} price={150} />
                    </div>
                </div>

            </div>






            {/* //amader ponno */}
            {/* <AmaderPonno></AmaderPonno> */}
        </div>
    );
};

export default ProyojonioSarMati;