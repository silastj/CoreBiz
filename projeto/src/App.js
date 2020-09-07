import React from 'react';
// import { useSelector } from 'react-redux';

import './App.css';

//ROUTER
import { BrowserRouter } from 'react-router-dom';
// import Routes from './Routes';

//SLIDE
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//COMPONENTS
import Header from './components/partials/Header';
import Footer from './components/partials/Footer';
import ContainerPreFooter from './components/partials/PreFooter';
import SimpleSlider from './components/partials/Slide';
import SlideProducts from './components/partials/SlideProducts';



function App() {
  return (
    <BrowserRouter>
        <Header/>          
          <SimpleSlider/>
          <SlideProducts/>
          <ContainerPreFooter/>
        <Footer/>
    </BrowserRouter>

  );
}
export default App;
