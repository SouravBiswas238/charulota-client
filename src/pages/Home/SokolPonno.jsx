import React from 'react';
import hoverImage1 from '../../assets/images/hoverImage1.jpg';
import hoverImage from '../../assets/images/hoverImage2.jpg'
import HoverCard from '../../shear_component/HoverCard';


const SokolPonno = () => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-y-6 gap-x-3 md:grid-cols-4 lg:grid-cols-6'>

                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>
                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>
                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>
                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>
                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>
                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>
                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>
                <HoverCard tittle={'এন্থরিয়াম'} hoverImage={hoverImage1} mainImage={hoverImage} price={1000}></HoverCard>




            </div>
        </div>
    );
};

export default SokolPonno;