import React, { useContext } from 'react';
import { Box } from '@mui/material';
import AboutContext from '@/context/aboutContext';
import HeaderMenu from '@/components/HeaderMenu';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Features from '@/components/Features';
import CarouselCatalog from '@/components/CarouselCatalog';
import Trailers from '@/components/Trailers';
import Community from '@/components/Community';
import Footer from '@/components/Footer';

function Container() {
  const { aboutOpen } = useContext(AboutContext)

  return (
    <Box>
      <HeaderMenu />
      {aboutOpen ?
        <AboutUs /> :
        <>
          <Hero />
          <Features />
          <CarouselCatalog />
          <Trailers />
        </>
      }
      <Community />
      <Footer />
    </Box>
  );
}

export default Container;
