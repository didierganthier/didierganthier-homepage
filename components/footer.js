import {
  Box,
  Container,
  Flex,
  Link,
  Text,
  useColorModeValue
} from '@chakra-ui/react'

const Footer = () => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const muted = useColorModeValue('gray.600', 'whiteAlpha.600')

  return (
    <Box as="footer">
      <Container maxW="container.xl">
        <Flex
          borderTop="1px solid"
          borderColor={border}
          py={8}
          direction={{ base: 'column', sm: 'row' }}
          justify="space-between"
          gap={4}
          color={muted}
          fontSize="sm"
        >
          <Text>© {new Date().getFullYear()} Didier Peran Ganthier.</Text>
          <Flex gap={5}>
            <Link
              href="https://github.com/didierganthier"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/didierganthier"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </Link>
            <Link
              href="https://medium.com/@didierganthier"
              target="_blank"
              rel="noreferrer"
            >
              Medium
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}

export default Footer
