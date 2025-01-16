import React from 'react';
import styles from './style.module.scss';
import { Box } from '@mui/material';
import Image from 'next/image';

function CarouselCatalog() {
  const catalog = [
    'black-mirror', 'stranger-things', 'dexter', 'westworld', 'house-of-cards',
    'game-of-thrones', 'flash','breaking-bad', 'how-to-get-away-with-murder'
  ];
  const expandedCatalog = Array(4).fill(catalog).flat();

  return (
    <Box className={styles.container}>
      <Box className={styles['container__wrapper']}>
        {expandedCatalog.map((name, index) => (
          <Image
            key={index}
            src={`/assets/images/poster-${name}.png`}
            width={220}
            height={330}
            alt={`movie cover ${name}`}
          />
        ))}
      </Box>
    </Box>
  );
}


export default CarouselCatalog;