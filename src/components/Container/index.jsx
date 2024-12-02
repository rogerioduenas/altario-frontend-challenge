import React from 'react';
import { Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function Container() {
  const theme = useTheme();

  return (
    <Typography
      variant='h1ExtraBold'
      color='primary'
      sx={{
        height: '100px',
        width: '100px',
        background: theme.gradient.primary,
      }}
    >
      Container
    </Typography>
  );
}

export default Container;
