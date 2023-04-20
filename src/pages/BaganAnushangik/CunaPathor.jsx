import React from 'react';
import NurseryBanner from '../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../shear_component/Nursery/RouteFilterdNavbar';

const CunaPathor = () => {
    return (
        <div className=''>
            {/* sheard component for banner */}
            <NurseryBanner pageName='চুনা পাথর'></NurseryBanner>
            {/* Filterd navigation bar */}
            <RouteFilterdNavbar/>
        </div>
    );
};

export default CunaPathor;