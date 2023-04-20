import React from 'react';
import NurseryBanner from '../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../shear_component/Nursery/RouteFilterdNavbar';

const TobOjioBag = () => {
    return (
        <div className=''>
        {/* sheard component for banner */}
        <NurseryBanner pageName='টব ও জিও ব্যাগ'></NurseryBanner>
        {/* Filterd navigation bar */}
        <RouteFilterdNavbar/>
    </div>
    );
};

export default TobOjioBag;