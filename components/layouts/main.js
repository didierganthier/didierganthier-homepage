import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import NoSsr from '../no-ssr.js'
import GamingSetup from '../gaming-setup.js'


const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Didier Peran Ganthier - HomePage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
      <NoSsr>
        <GamingSetup />
      </NoSsr>
          {children}
      </Container>
    </Box>
  )
}

export default Main