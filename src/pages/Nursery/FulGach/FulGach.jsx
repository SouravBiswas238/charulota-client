import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';

const FulGach = () => {
    return (
        <div>
            {/* sheard component for banner */}
            <NurseryBanner pageName='ফুল গাছ' />
            {/* Filterd navigation bar and product */}
            <RouteFilterdNavbar />
        </div>
    );
};

export default FulGach;