import React from 'react';
import NurseryBanner from '../../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../../shear_component/Nursery/RouteFilterdNavbar';

const KaktasPlants = () => {
    return (
        <div>
            {/* sheard component for banner */}
            <NurseryBanner pageName='ক্যাকটাস ও স্যাকুলেন্ট' />
            {/* Filterd navigation bar and product */}
            <RouteFilterdNavbarar />
        </div>
    );
};

export default KaktasPlants;