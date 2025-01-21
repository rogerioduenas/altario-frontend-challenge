import React from 'react';
import styles from './style.module.scss';
import { Box, Typography } from '@mui/material';
import TitleAndSubtitle from '@/components/TitleAndSubtitle';
import EmailForm from '@/components/EmailForm';
import Image from 'next/image';

function Footer() {
  const socialMedias = [
    { name: 'linkedin', url: 'https://www.linkedin.com/in/rogerio-duenas-3428441b1/' },
    { name: 'github', url: 'https://github.com/rogerioduenas' },
    { name: 'twitter', url: 'https://x.com/duenasdev' },
  ]

  return (
    <Box className={styles.container}>
      <Box className={styles['texts']}>
        <TitleAndSubtitle
          label='Newsletter'
          title='Receive our amazing newsletter with news'
          subTitle='In order to receive news from our app so you can start tracking your TV shows in a better way, all you have to do is enter your email address.'
        />
      </Box>
      <EmailForm />
      <Box className={styles['formAndFooter']}>
        <Box className={styles['footer']}>
          <Box className={styles['logos']}>
            {socialMedias.map((data, index) => (
              <a
                href={data.url}
                target='_blank'
                key={index}
              >
                <Image
                  src={`/assets/images/icon-${data.name}.svg`}
                  width={20}
                  height={20}
                  alt={`${data.name} logo`}
                  link={data.url}
                />
              </a>
            ))}
          </Box>
          <Typography>
            This application was developed by <a href='https://www.linkedin.com/in/rogerio-duenas-3428441b1/' target='_blank'><label>Rogerio Duenas</label></a>, inspired by the design created by <a href='https://www.figma.com/design/xqsMXosVwmtJWKdNnbOM7n/%5BALTAR%5D-Challenge%3A-Front-End-(styling)-%230127?node-id=635-13426&t=w9cpso4i9JP3HYxj-0' target='_blank' rel='noopener noreferrer'>
              <label>Daniel Korpai</label>
            </a> © 2018.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Footer