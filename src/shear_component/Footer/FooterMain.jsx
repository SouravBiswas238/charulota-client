import React from 'react';

const FooterMain = () => {

    const logoImage =
        "https://charulata.green/wp-content/uploads/2022/06/logocharulata-1.png";

    return (
        <div>

            <footer className=" ">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0  text-heading-gray">
                    <div className='lg:w-1/3'>
                        <div className="flex flex-col space-y-4">
                            <div className="lg:w-[16rem] md:w-[20rem] h-auto">
                                <img src={logoImage} alt="Charulata logo" />
                            </div>
                            <div className="flex flex-col space-y-2 text-sm  ">

                                <p className='text-heading-black text-[1rem]'>কোন প্রশ্ন? নির্দ্বিধায় কল করুন ২৪/৭</p>
                                <h2 className='text-heading-black font-semibold text-[1.2rem]'>01799-880886</h2>
                                <p>অফিসঃ লেন-১০, হাউজ-৫১৭/৩,বারিধারা ডিওএইচএস-১২০৬ ঢাকা</p>
                                <p>নার্সারিঃ আশুলিয়া, সাভার, ঢাকা</p>
                                <p>ই-মেইল: charulatagreen@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4'>
                        <div className="flex flex-col space-y-4">
                            <h2 className="font-medium text-heading-black">DELIVERY ZONE(FRIDAY)</h2>
                            <div className="flex flex-col space-y-2 text-sm  ">
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Uttara Khilkhet Nikunja</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Notun-Bazar Bosundhara</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Gulshan Banani</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Mohakhali Badda Rampura</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Banasree Aftabnagar</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Khilgaon Basabo</a>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h2 className="font-medium text-heading-black">DELIVERY ZONE (SATURDAY)</h2>
                            <div className="flex flex-col space-y-2 text-sm  ">
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Mirpur Pallabi</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Gabtoli Shyamoli Kallyanpur</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Mohammadpur Adabor</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Dhanmondi Kalabagan</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Jigatola Hazaribag</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Firmgate Tejgaon</a>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h2 className="font-medium text-heading-black">DELIVERY ZONE (SUNDAY)</h2>
                            <div className="flex flex-col space-y-2 text-sm  ">
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Mogbazar Eskaton</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Kakrail Paltan</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Motijheel Komolapur </a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Ramna Shahbagh </a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Jatrabari Sayedabad</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Gulistan Fakirapool</a>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <h2 className="font-medium text-heading-black">USEFUL LINKS</h2>
                            <div className="flex flex-col space-y-2 text-sm  ">
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">About Us</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Contact Us</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Privacy Policy</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Returns</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Terms & Conditions</a>
                                <a className='hover:text-primary-green py-1' rel="noopener noreferrer" href="#">Our Sitemap</a>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </div>
    );
};

export default FooterMain;