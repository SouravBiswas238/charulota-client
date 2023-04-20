import React from 'react';
import NurseryBanner from '../../../shear_component/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/RouteFilterdNavbar';

const OutdoorPlants = () => {
    return (
        <div>
            {/* sheard component for banner */}
            <NurseryBanner pageName='আউটডোর প্লান্টস' />
            {/* Filterd navigation bar and product */}
            <RouteFilterdNavbar />
        </div>
    );
};

export default OutdoorPlants;