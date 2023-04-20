import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';


const DeshiFolGach = () => {
    return (
        <div className=''>
            {/* sheard component for banner */}
            <NurseryBanner pageName='দেশি ফল গাছ'></NurseryBanner>
            {/* Filterd navigation bar */}
            <RouteFilterdNavbar></RouteFilterdNavbar>
        </div>
    );
};

export default DeshiFolGach;