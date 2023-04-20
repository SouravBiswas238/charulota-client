import React from 'react';
import image1 from '../../assets/images/saveGreen1.jpg'
import image2 from '../../assets/images/bsaveGreen2.jpg'
import image3 from '../../assets/images/saveGreen3.jpg'
import image4 from '../../assets/images/saveGreen4.jpg'
import './saveGreenStyle.css'


const savaGreenData = [{
    centerText: 'অফিস, রেস্টুরেন্ট, শোরুমসহ যেকোনো কর্পোরেট সবুজায়নে যোগাযোগ করুন চারুলতা টিমের সাথে',
    linkText: 'যোগাযোগ করুন',
    image: image1,

}, {
    centerText: 'Fast & Secure Delivary',
    linkText: 'VIEW MORE',
    image: image2
}, {
    centerText: 'মাসিক বাগান পরিচর্যা প্যাকেজ',
    linkText: 'বিস্তারিত দেখুন',
    image: image3
}, {
    centerText: 'Save 20% Autumn Sale',
    linkText: 'VIEW MORE',
    image: image4
},
]

const SaveGreen = () => {
    return (
        <div className='bg-[#F7F7F7] py-8'>
            <div className='container mx-auto '>
                <div className='relative'>
                    <div className='border-b-2 border-gray-300'>
                        <h1 className='text-[1.3rem] font-medium pb-3'>Buy Green to Save Green</h1>
                    </div>
                    <div className='absolute border-b-2 border-primary-color w-64 bottom-0 left-0 z-10'></div>
                </div>

                <div className='mt-7'>
                    <div className='grid grid-cols-1   gap-4 md:grid-cols-2 lg:grid-cols-4'>

                        {
                            savaGreenData.map((item, index) => <div key={index} className='Imageparentdiv relative'>
                                <img src={item.image} alt='' />
                                <div className='overlay'></div>
                                <div className='text  z-10 font-medium text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
                                    <p className='text-[1.1rem] text-[#fff] font-bold'>{item.centerText}</p>
                                    <a className='link text-[#fff] mt-8 uppercase text-[.8rem] cursor-pointer border-gray-500 border-b-2 inline-block  transition-colors duration-300 hover:border-white' href=''>{item.linkText}</a>
                                </div>
                                <div className='overlay absolute inset-0 bg-black opacity-0 transition-opacity duration-300'></div>
                            </div>)
                        }



                    </div>
                </div>

            
            </div>
        </div>

    );
};

export default SaveGreen;