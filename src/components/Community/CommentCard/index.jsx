import React from 'react';
import Styles from './style.module.scss';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';

function CommentCard(props) {
  return (
    <Box className={Styles.container}>
      <Box className={Styles['title']}>
        <Box className={Styles['photoAndName']}>
          <Image
            className={Styles['photo']}
            src={`/assets/images/avatar-${props.image}.png`}
            width={36}
            height={36}
            alt={`photo of a random person`}
          />
          <Typography className={Styles['name']}>{props.name}</Typography>
        </Box>
        <Image
          src={`/assets/images/icon-twitter.svg`}
          width={20}
          height={20}
          alt={`twitter logo`}
        />
      </Box>
      <Typography className={Styles['text']}>
        {props.text}
      </Typography>
      <Typography className={Styles['date']}>
        Jan 18, 2018
      </Typography>

    </Box>
  )
}

export default CommentCard