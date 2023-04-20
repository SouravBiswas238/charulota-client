import React from 'react';
import NurseryBanner from '../../shear_component/Nursery/NurseryBanner';
import RouteFilterdNavbar from '../../shear_component/Nursery/RouteFilterdNavbar';

const JoiboSharOKitnasok = () => {
    return (
        <div className=''>
            {/* sheard component for banner */}
            <NurseryBanner pageName='জৈব সার ও কীটনাশক'></NurseryBanner>
            {/* Filterd navigation bar */}
            <RouteFilterdNavbar />
        </div>
    );
};

export default JoiboSharOKitnasok;