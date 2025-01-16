import React from 'react';
import styles from './style.module.scss'
import { Box } from '@mui/material';
import HeaderMenu from '@/components/HeaderMenu';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import CarouselCatalog from '@/components/CarouselCatalog';
import Trailers from '@/components/Trailers'

function Container() {
  return (
    <Box className={styles.container}>
      <HeaderMenu />
      <Hero />
      <Features />
      <CarouselCatalog />
      <Trailers/>
    </Box>
  );
}

export default Container;
