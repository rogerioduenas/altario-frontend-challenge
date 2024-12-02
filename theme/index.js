import { createTheme } from '@mui/material/styles';

const generateVariants = (baseFontSize, baseLineHeight) => ({
  default: {
    fontSize: baseFontSize,
    fontWeight: 400,
    lineHeight: baseLineHeight,
  },
  bold: {
    fontSize: baseFontSize,
    fontWeight: 600,
    lineHeight: baseLineHeight,
  },
  extraBold: {
    fontSize: baseFontSize,
    fontWeight: 700,
    lineHeight: baseLineHeight,
  },
});

const theme = createTheme({
  palette: {
    brand: {
      primary: '#540CFA',
      secondary: "#FC3832"
    },
    gray: {
      darkest: '#0C1D31',
      dark: '#273444',
      medium: '#8492A6',
      light: '#C0CCDA',
      lighter: '#E5E9F2',
      lightest: '#F1F5F9',
    },
    flat: {
      black: '#000'
    },
  },
  gradient: {
    primary: 'linear-gradient(45deg, #9C09DB, #1C0FD7)',
    secondary: 'linear-gradient(45deg, #F2C314, #FC3832)',
    tertiary: 'linear-gradient(45deg, #32FBFC, #3214F2)'
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
    lineHeight: 1.5,
    fontWeight: 400,

    ...generateVariants("60px", 1.2),

    h1: generateVariants("60px", 1.2).default,
    h1Bold: generateVariants("60px", 1.2).bold,
    h1ExtraBold: generateVariants("60px", 1.2).extraBold,

    h2: generateVariants("30px", 1.2).default,
    h2Bold: generateVariants("30px", 1.2).bold,
    h2ExtraBold: generateVariants("30px", 1.2).extraBold,

    h3: generateVariants("20px", 1.5).default,
    h3Bold: generateVariants("20px", 1.5).bold,
    h3ExtraBold: generateVariants("20px", 1.5).extraBold,

    h4: generateVariants("18px", 1.5).default,
    h4Bold: generateVariants("18px", 1.5).bold,
    h4ExtraBold: generateVariants("18px", 1.5).extraBold,

    body: generateVariants("16px", 1.5).default,
    bodyBold: generateVariants("16px", 1.5).bold,
    bodyExtraBold: generateVariants("16px", 1.5).extraBold,

    caption: generateVariants("16px", 1.5).default,
    captionBold: generateVariants("16px", 1.5).bold,
    captionExtraBold: generateVariants("16px", 1.5).extraBold,
  },
});

export default theme;