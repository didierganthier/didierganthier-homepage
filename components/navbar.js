import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './logo'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, children }) => {
  const active = href === '/' ? path === '/' : path.startsWith(href)
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')

  return (
    <NextLink href={href} passHref>
      <Link
        position="relative"
        px={2}
        py={2}
        color={active ? 'inherit' : muted}
        fontSize="sm"
        fontWeight="600"
        _hover={{ color: 'inherit', textDecoration: 'none' }}
        _after={
          active
            ? {
                content: '""',
                position: 'absolute',
                left: 2,
                right: 2,
                bottom: 0,
                h: '2px',
                bg: 'brand.500'
              }
            : undefined
        }
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = ({ path }) => {
  const background = useColorModeValue(
    'rgba(247,245,240,.88)',
    'rgba(13,17,23,.88)'
  )
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <Box
      position="fixed"
      as="nav"
      top={0}
      w="100%"
      bg={background}
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor={border}
      zIndex={10}
    >
      <Container
        maxW="container.xl"
        h={{ base: '72px', md: '80px' }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo />
        <Stack
          direction="row"
          display={{ base: 'none', md: 'flex' }}
          alignItems="center"
          spacing={4}
        >
          <LinkItem href="/" path={path}>
            About
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Work
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Writing
          </LinkItem>
        </Stack>
        <Flex align="center" gap={2}>
          <Button
            as="a"
            href="mailto:didierganthierperan@gmail.com"
            size="sm"
            display={{ base: 'none', sm: 'inline-flex' }}
            bg="brand.500"
            color="white"
            _hover={{ bg: 'brand.600' }}
          >
            Let&apos;s talk
          </Button>
          <ThemeToggleButton />
          <Box display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Open navigation"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Work</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Writing</MenuItem>
                </NextLink>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
