import React from 'react';
import styles from './style.module.scss';
import { Box, Typography } from '@mui/material';

function TitleAndSubtitle({ label, title, subTitle, dark }) {
  return (
    <Box className={`${styles.container} ${dark ? styles.dark : ''}`}>
      <Typography className={styles.label}>{label}</Typography>
      <Typography className={styles.title}>{title}</Typography>
      <Typography className={styles.subTitle}>{subTitle}</Typography>
    </Box>
  );
}

export default TitleAndSubtitle;
