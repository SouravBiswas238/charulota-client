import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import customarIcon from '../../assets/images/customer-service-60x60.png'

const ContactHome = () => {

    const socialRoute = [
        {
            bgColor: "hover:bg-[#3b5998]",
            borderColor: "hover:border-[#3b5998] ",
            icon: <FaFacebookF />,
        },
        {
            bgColor: "hover:bg-[#00aff0]",
            borderColor: "hover:border-[#00aff0] ",
            icon: <FaTwitter />,
        },

        {
            bgColor: "hover:bg-[#bd081c]",
            borderColor: "hover:border-[#bd081c] ",
            icon: <FaPinterest />,
        },
        {
            bgColor: "hover:bg-[#0077b5]",
            borderColor: "hover:border-[#0077b5] ",
            icon: <FaLinkedinIn />,
        },
        {
            bgColor: "hover:bg-[#00405d]",
            borderColor: "hover:border-[#00405d] ",
            icon: <FaTelegramPlane />,
        },
    ];


    return (
        <div className="py-4 my-2  bg-primary-green text-title-primary">
            <div className="lg:container mx-auto px-4">

                <div className=" flex items-center justify-center space-y-4 sm:justify-between sm:space-y-0">

                    <div className="flex flex-row pr-3 space-x-2 sm:space-x-2 ">
                        <div className="flex items-center lg:w-3/4 w-full  ">
                            <img src={customarIcon} alt="" />
                            <div className='lg:px-10 px-5 '>
                                <h1 className='lg:text-[1.5rem] text-[1.2rem]'>
                                    আপনার কাঙ্ক্ষিত পণ্যটি খুঁজে পেতে বা যে কোন কাস্টম অর্ডারের জন্য নির্দ্বিধায় যোগাযোগ করুন।</h1>
                                <h2 className='text-title-secondary'>
                                    হেল্প-লাইনঃ 01799-880886, 01799-880996, (WhatsApp, imo)
                                </h2>
                            </div>

                        </div>

                        <div className='hidden lg:flex flex-col justify-center'>
                            <h2>Follow us on</h2>
                            {/* social media */}
                            <div>
                                <ul className="hidden md:flex flex-row">
                                    {socialRoute?.map((route, index) => (
                                        <li
                                            key={route.path + index}
                                            className={`mr-3 w-7 h-7 border-[2px] border-gray-300 rounded-full flex justify-center items-center ${route.bgColor} ${route.borderColor} hover:text-white duration-150 ease-in-out cursor-pointer`}
                                        >
                                            {route.icon}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};
export default ContactHome;