import NextLink from 'next/link'
import { Box, Flex, Link, Text, useColorModeValue } from '@chakra-ui/react'

const Logo = () => {
  const markBg = useColorModeValue('#101820', '#F6F2E9')
  const markColor = useColorModeValue('#F6F2E9', '#101820')

  return (
    <NextLink href="/" passHref>
      <Link
        _hover={{ textDecoration: 'none' }}
        aria-label="Didier Ganthier — Home"
      >
        <Flex align="center" gap={3}>
          <Box
            w="38px"
            h="38px"
            borderRadius="12px"
            bg={markBg}
            color={markColor}
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontFamily="mono"
            fontWeight="700"
            fontSize="sm"
          >
            DG
          </Box>
          <Box display={{ base: 'none', sm: 'block' }}>
            <Text fontWeight="700" lineHeight="1.1" letterSpacing="-0.02em">
              Didier Ganthier
            </Text>
            <Text fontSize="xs" opacity={0.58} mt={1}>
              Senior Software Engineer
            </Text>
          </Box>
        </Flex>
      </Link>
    </NextLink>
  )
}

export default Logo
