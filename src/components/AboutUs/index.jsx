import React from 'react';
import TitleAndSubtitle from '@/components/TitleAndSubtitle';
import { Box } from '@mui/material';
import Image from 'next/image';
import styles from './style.module.scss';

function AboutUs() {
  return (
    <Box className={styles.container}>
      <Box className={styles['texts']}>
        <TitleAndSubtitle
          label="Meet the Founders and Partners"
          title="About Us"
          subTitle="Our founding team started their journeys in the corporate world. They then moved on to build their own startups before coming together to form Altar.io. This experience has made André, Daniel, Paolo and João lean by nature. They studied lean product development through building startups from the ground up with very few resources."
        />
      </Box>
      <Box className={styles['squares']}>
        <Image
          alt='icon of operation system'
          src='/assets/images/shape-squares.png'
          sizes="450px"
          priority={true}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
      <Box className={styles['singleSquare']}>
        <Image
          alt='icon of operation system'
          src='/assets/images/shape-square.png'
          sizes="450px"
          priority={true}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Box>
    </Box>
  )
}

export default AboutUs