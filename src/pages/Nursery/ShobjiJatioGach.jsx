import React from 'react';
import NurseryBanner from '../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../shear_component/Nursery/RouteFilterdNavbar';

const ShobjiJatioGach = () => {
    return (
        <div>
        {/* sheard component for banner */}
        <NurseryBanner pageName='সবজি জাতীয় গাছ' />
        {/* Filterd navigation bar and product */}
        <RouteFilterdNavbar />
    </div>
    );
};

export default ShobjiJatioGach;