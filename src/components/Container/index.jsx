import React from 'react';
import { Box } from '@mui/material';
import HeaderMenu from '@/components/HeaderMenu';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CarouselCatalog from '@/components/CarouselCatalog';
import Trailers from '@/components/Trailers';
import Community from '@/components/Community';
import Footer from '@/components/Footer'
function Container() {
  return (
    <Box>
      <HeaderMenu />
      <Hero />
      <Features />
      <CarouselCatalog />
      <Trailers/>
      <Community/>
      <Footer/>
    </Box>
  );
}

export default Container;
