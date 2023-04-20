import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';


const BideshiFolGach = () => {
    return (
        <div className=''>
            {/* sheard component for banner */}
            <NurseryBanner pageName='বিদেশি ফল গাছ'></NurseryBanner>
            {/* Filterd navigation bar */}
            <RouteFilterdNavbar/>
        </div>
    );
};

export default BideshiFolGach;