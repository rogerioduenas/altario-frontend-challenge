import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HeaderMenu from "@/components/HeaderMenu";

function Container() {
  const theme = useTheme();

  return (
    <Box>
      <HeaderMenu/>
    </Box>
  );
}

export default Container;
