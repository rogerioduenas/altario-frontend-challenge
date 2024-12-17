import React from 'react';
import styles from './style.module.scss'
import { Box } from '@mui/material';
import HeaderMenu from '@/components/HeaderMenu';
import Hero from '@/components/Hero';
import Features from '@/components/Features';

function Container() {

  return (
    <Box className={styles.container}>
      <HeaderMenu />
      <Hero />
      <Features/>
    </Box>
  );
}

export default Container;
