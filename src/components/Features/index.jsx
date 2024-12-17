import React from 'react'
import styles from './style.module.scss';
import { Box, Typography } from '@mui/material';
import TitleAndSubtitle from '../TitleAndSubtitle';
import Image from 'next/image';

function Features() {
  const card = [
    {
      logo: '/assets/images/icon-play.svg',
      title: 'Automated traking',
      text: 'Track your favorite shows automatically without switching between apps.'
    },
    {
      logo: '/assets/images/icon-ml.svg',
      title: 'Machine learning',
      text: 'Get recommendations like never before, which are truly customized for your taste.'
    },
    {
      logo: '/assets/images/icon-notifications.svg',
      title: 'Smart notifications',
      text: 'Receive smart notifications exactly at the right moments when you need them.'
    }
  ]
  return (
    <Box className={styles.container}>
      <TitleAndSubtitle
        label="Features"
        title="Built and customized for your habits"
        subTitle="ShowTrackr’s built-in machine learning and context-aware features guarantee that all the notifications and recommendations are always delivered to you in the perfect moment."
      />
      <Box className={styles.features}>
        {card.map((data, index) => (
          <Box
            key={index}
            className={styles['features__item']}>
            <Image
              alt='icon of operation system'
              src={data.logo}
              height={50}
              width={50}
            />
            <Typography className={styles['features__item__title']}>
              {data.title}
            </Typography>
            <Typography className={styles['features__item__text']}>
              {data.text}
            </Typography>
            <Box className={styles['features__item__link']}>
              <Typography className={styles['features__item__link__text']}>
                Learn more
              </Typography>
              <Image
                alt='icon of operation system'
                src='/assets/images/search.svg'
                height={16}
                width={10}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default Features