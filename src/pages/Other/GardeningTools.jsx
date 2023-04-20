import React from 'react';
import { useState } from 'react';
import NurseryBanner from '../../shear_component/Nursery/NurseryBanner';
import ProductNotFound from '../../shear_component/Nursery/ProductNotFound';
import RouteFilterdNavbar from '../../shear_component/Nursery/RouteFilterdNavbar';

const GardeningTools = () => {
    const [gardeningTools, setGardeningTools] = useState(false);
    return (
        <div>
            {/* sheard component for banner */}
            <NurseryBanner pageName='গার্ডেনিং টুলস' />
            {/* Filterd navigation bar and product */}
            {
                gardeningTools ? gardeningTools && <RouteFilterdNavbar /> : <ProductNotFound />
            }
        </div>
    );
};

export default GardeningTools;