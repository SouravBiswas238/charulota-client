import React from 'react';
import SaveGreen from './SaveGreen';
import './home-style.css'
import ProyojonioSarMati from './ProyojonioSarMati';
import AmaderPonno from './AmaderPonno';
import ContactHome from './ContactHome';



const Home = () => {
  return (
    <div className=''>
      <SaveGreen />
      <AmaderPonno />
      <ProyojonioSarMati />
      <ContactHome />
    </div>
  );
};

export default Home;
