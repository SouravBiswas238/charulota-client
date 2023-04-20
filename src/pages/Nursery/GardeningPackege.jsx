import React from 'react';
import { useState } from 'react';
import NurseryBanner from '../../shear_component/Nursery/NurseryBanner';
import ProductNotFound from '../../shear_component/Nursery/ProductNotFound';
import RouteFilterdNavbar from '../../shear_component/Nursery/RouteFilterdNavbar';

const GardeningPackege = () => {
    const [gardeningPackage, setGardeningPackage] = useState(false)
    return (
        <div>
            {/* sheard component for banner */}
            <NurseryBanner pageName='গার্ডেনিং প্যাকেজ' />
            {/* Filterd navigation bar and product */}
            {
                gardeningPackage ? gardeningPackage && <RouteFilterdNavbar /> : <ProductNotFound />
            }
        </div>
    );
};

export default GardeningPackege;