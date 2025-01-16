import React from 'react';
import styles from './style.module.scss';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import TitleAndSubtitle from '@/components/TitleAndSubtitle';
import EmailForm from '@/components/EmailForm';

function Hero() {
  const icons = ['apple', 'android', 'windows'];

  return (
    <Box className={styles.container}>
      <Box>
        <Box className={styles.textAndInput}>
          <TitleAndSubtitle
            title="Track your shows automatically"
            subTitle="With ShowTrackr you can track your favorite TV shows automatically, so you never loose track of your TV shows ever again. 🍿"
          />
          <EmailForm />
        </Box>
        <Box className={styles.systemIcons}>
          <Typography
            className={styles['systemIcons__text']}>
            Compatible with:
          </Typography>
          {icons.map(opSystem => (
            <Image
              className={styles['systemIcons__image']}
              key={opSystem}
              alt='icon of operation system'
              src={`/assets/images/icon-${opSystem}.svg`}
              height={30}
              width={30}
            />
          ))}
        </Box>
      </Box>
      <Box className={styles.iphoneMock}>
        <Image
          alt='icon of operation system'
          src='/assets/images/iphone-mock.png'
          sizes="450px"
          priority={true}
          fill
          style={{
            objectFit: 'contain',
          }}
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


export default Hero