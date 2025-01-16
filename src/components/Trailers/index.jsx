import React, { useState, useRef } from 'react'
import styles from './style.module.scss';
import { Box, Typography } from '@mui/material';
import TitleAndSubtitle from '../TitleAndSubtitle';
import Image from 'next/image';

const catalog = [
  { name: 'House of Cards', cover: 'house-of-cards', video: 'houseOfCards' },
  { name: 'Game of Thrones', cover: 'game-of-thrones', video: 'gameOfThrones' },
  { name: 'Westworld', cover: 'westworld', video: 'westworld' }
]

function Trailers() {

  const [media, setMedia] = useState(['house-of-cards', 'houseOfCards'])
  const videoRef = useRef(null);

  const handleMediaChange = (cover, video) => {
    setMedia([cover, video]);
    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    <Box className={styles.container}>
      <Box className={styles.texts}>
        <TitleAndSubtitle
          title='Amazing Trailers'
          subTitle='Since most of our features work in a completely automated way, you will mainly use our apps to discover new TV shows recommended for you and discuss the most interesting episodes with like-minded people.' />
        {catalog.map((data, index) => (
          <Box
            onClick={() => handleMediaChange(data.cover, data.video)}
            className={`${styles.trailer} ${media[0] === data.cover ? styles.selected : ''}`}
            key={index}>
            <Image
              src={`/assets/images/poster-${data.cover}.png`}
              width={22}
              height={33}
              alt={`movie cover ${data.cover}`}
            />
            <Typography>{data.name}</Typography>
          </Box>
        ))}
        <Box className={styles.phone}>
          <Image
            className={styles.bgPhone}
            src={`/assets/images/iphone-frame.png`}
            width={260}
            height={540}
            alt={`movie cover house-of-cards`}
          />
          <video
            ref={videoRef}
            className={styles.video}
            controls
            preload="yes">
            <source
              src={`/assets/videos/${media[1]}.mp4`}
              type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Box>
        <Image
          className={styles.cover}
          src={`/assets/images/poster-${media[0]}.png`}
          width={555}
          height={810}
          alt={`movie cover house-of-cards`}
        />
      </Box>
    </Box>
  )
}

export default Trailers
