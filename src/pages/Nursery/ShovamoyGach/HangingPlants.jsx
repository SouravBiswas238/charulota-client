import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';

const HangingPlants = () => {
    return (
        <div>
        {/* sheard component for banner */}
        <NurseryBanner pageName='হ্যাঙ্গিং প্লান্টস' />
        {/* Filterd navigation bar and product */}
        <RouteFilterdNavbar />
    </div>
    );
};

export default HangingPlants;