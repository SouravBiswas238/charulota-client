import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const AmaderPonno = () => {
    const active = "text-primary-green gap-3 font-bold mr-4";
    const deactive = "text-nav-color gap-3 font-bold mr-4 hover:text-primary-green transition-all duration-300";
    return (
        <div className='pt-6 pb-4 mx-auto container'>
            <div>
                <h1 className='blcok text-center text-[1.4rem] font-bold   text-primary-black'>আমাদের পণ্যসমূহ</h1>
                <div className='flex justify-center items-center py-4'>
                    <nav>
                        <NavLink className={({ isActive }) => (isActive ? active : deactive)} to='' >
                            সকল পণ্য
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? active : deactive)} to='folgach'>
                            ফল গাছ
                        </NavLink>
                        <NavLink className={({ isActive }) => (isActive ? active : deactive)} to='fulgach' >
                            ফুল গাছ
                        </NavLink >
                        <NavLink className={({ isActive }) => (isActive ? active : deactive)} to='sovabordhon'>
                            শোভাবর্ধক
                        </NavLink>
                    </nav>
                </div>

                <div>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AmaderPonno;