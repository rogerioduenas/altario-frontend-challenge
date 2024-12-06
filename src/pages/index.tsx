import Head from "next/head";
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from "../../theme";
import Container from "@/components/Container";
import { Poppins } from 'next/font/google';

const mainFontFamily = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"]
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Altar.io challenge</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div
          className={mainFontFamily.className}>
          <Container />
        </div>
      </ThemeProvider>
    </>
  );
}
