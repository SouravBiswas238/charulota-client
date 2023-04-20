import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';

const SugondhiFulGach = () => {
    return (
        <div>
            {/* sheard component for banner */}
            <NurseryBanner pageName='সুগন্ধি ফুল গাছ' />
            {/* Filterd navigation bar and product */}
            <RouteFilterdNavbar />
        </div>
    );
};

export default SugondhiFulGach;