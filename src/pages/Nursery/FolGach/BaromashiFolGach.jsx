import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';


const BaromashiFolGach = () => {
    return (
        <div>
            {/* sheard component for banner */}
            <NurseryBanner pageName={'বারমাসি ফল গাছ'} />
            {/* Filterd navigation bar */}
            <RouteFilterdNavbar/>
        </div>
    );
};

export default BaromashiFolGach;