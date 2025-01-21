import React from 'react'
import styles from './style.module.scss';
import { Box } from '@mui/material';
import TitleAndSubtitle from '../TitleAndSubtitle';
import CommentCard from './CommentCard';

function Community() {

  const imagePaths = [1, 2, 3, 4, 5, 6, 7, 8];
  const names = ['Emmanuel Center', 'Mary Padding', 'Jared Margin', 'Josie Flex',]
  const texts = ['I use ShowTrackr every day, and it’s awesome! I track all of my TV shows in it. :) ', 'ShowTrackr is a real gem! I started using it a couple months ago and it completely changed the way how I watch TV shows. I can only recommend it! '];
  const cards = Array.from({ length: 10 }, (_, index) => {
    const imagePath = imagePaths[index % imagePaths.length];
    const name = names[index % names.length];
    const text = texts[index % texts.length];
    return (
      <CommentCard
        key={index}
        image={imagePath}
        name={name}
        text={text}
      />
    )
  })

  return (
    <Box className={styles.container}>
      <Box className={styles['texts']}>
        <TitleAndSubtitle
          dark={true}
          label='Community'
          title='We believe in the power of community'
          subTitle='Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say.'
        />
        <button className={styles['button']}>
          Read more testimonials
        </button>
      </Box>
      <Box className={styles['comments']}>
        {cards}
      </Box>
    </Box>
  )
}

export default Community;