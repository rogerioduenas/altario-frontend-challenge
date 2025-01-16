import React from 'react'
import styles from './style.module.scss'
import { Box, Typography } from '@mui/material'

function TitleAndSubtitle(props) {
  return (
    <Box className={styles.container}>

      <Typography className={styles.label}>{props.label}</Typography>
      <Typography className={styles.title}>{props.title}</Typography>
      <Typography className={styles.subTitle}>{props.subTitle}</Typography>
    </Box>
  )
}

export default TitleAndSubtitle