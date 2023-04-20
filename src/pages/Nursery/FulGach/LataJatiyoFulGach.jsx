import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';

const LataJatiyoFulGach = () => {
    return (
        <div>
        {/* sheard component for banner */}
        <NurseryBanner pageName='লতা জাতীয় ফুল গাছ' />
        {/* Filterd navigation bar and product */}
        <RouteFilterdNavbar />
    </div>
    );
};

export default LataJatiyoFulGach;