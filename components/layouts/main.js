import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '../navbar'
import Footer from '../footer'

const Main = ({ children, router }) => (
  <Box as="main" minH="100vh">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Didier Ganthier is a Senior Software Engineer from Haiti building dependable mobile, web, AI and civic products."
      />
      <meta name="author" content="Didier Peran Ganthier" />
      <link rel="apple-touch-icon" href="/image.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="theme-color" content="#101820" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@didierganthier_" />
      <meta name="twitter:creator" content="@didierganthier_" />
      <meta
        name="twitter:image"
        content="https://www.didierganthier.com/card.png"
      />
      <meta property="og:site_name" content="Didier Ganthier" />
      <meta
        property="og:title"
        content="Didier Ganthier — Senior Software Engineer"
      />
      <meta
        property="og:description"
        content="Mobile, web, AI and civic products built for the real world."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.didierganthier.com" />
      <meta
        property="og:image"
        content="https://www.didierganthier.com/card.png"
      />
      <title>Didier Ganthier — Senior Software Engineer</title>
    </Head>
    <Navbar path={router.asPath} />
    <Box pt={{ base: '72px', md: '80px' }}>{children}</Box>
    <Footer />
  </Box>
)

export default Main
