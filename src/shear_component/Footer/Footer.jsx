import React from 'react';
import FooterBottom from './FooterBottom';
import FooterMain from './FooterMain';
import FooterTop from './FooterTop';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <FooterTop />
            <FooterMain />
            <FooterBottom />

        </div>
    );
};

export default Footer;