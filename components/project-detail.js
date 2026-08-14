import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowBackIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from './layouts/article'
import ProjectArtwork from './project-artwork'

const ProjectDetail = ({ project }) => {
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const panel = useColorModeValue('white', 'whiteAlpha.50')

  return (
    <Layout title={project.title}>
      <Container maxW="container.xl" pt={{ base: 10, md: 16 }}>
        <NextLink href="/works" passHref>
          <Link
            display="inline-flex"
            alignItems="center"
            gap={2}
            className="eyebrow"
            mb={10}
          >
            <ArrowBackIcon /> All work
          </Link>
        </NextLink>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 10, lg: 16 }}
          alignItems="end"
          mb={{ base: 14, md: 20 }}
        >
          <Box>
            <Text className="eyebrow" mb={4}>
              {project.type}
            </Text>
            <Heading
              as="h1"
              fontSize={{ base: '5xl', md: '7xl' }}
              lineHeight=".95"
              letterSpacing="-0.06em"
            >
              {project.title}
            </Heading>
          </Box>
          <Box>
            <Text
              fontSize={{ base: 'xl', md: '2xl' }}
              lineHeight="1.55"
              letterSpacing="-0.015em"
            >
              {project.summary}
            </Text>
            <Flex mt={6} gap={8} color={muted} fontSize="sm" flexWrap="wrap">
              <Box>
                <Text className="eyebrow" mb={1}>
                  Role
                </Text>
                <Text>{project.role}</Text>
              </Box>
              <Box>
                <Text className="eyebrow" mb={1}>
                  Year
                </Text>
                <Text>{project.year}</Text>
              </Box>
            </Flex>
          </Box>
        </SimpleGrid>

        <ProjectArtwork project={project} />

        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          gap={{ base: 10, lg: 14 }}
          py={{ base: 16, md: 24 }}
        >
          {[
            ['The challenge', project.problem],
            ['My contribution', project.contribution],
            ['The outcome', project.outcome]
          ].map(([title, copy]) => (
            <Box key={title} borderTop="1px solid" borderColor={border} pt={5}>
              <Text className="eyebrow" mb={4}>
                {title}
              </Text>
              <Text color={muted} fontSize="lg" lineHeight="1.75">
                {copy}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {project.image && (
          <Box
            bg={panel}
            border="1px solid"
            borderColor={border}
            borderRadius={{ base: '20px', md: '28px' }}
            p={{ base: 3, md: 8 }}
            mb={{ base: 14, md: 20 }}
          >
            <Image
              src={project.image}
              alt={`${project.title} product interface`}
              borderRadius="16px"
              w="100%"
            />
          </Box>
        )}

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          gap={8}
          borderTop="1px solid"
          borderColor={border}
          py={{ base: 10, md: 14 }}
        >
          <Box>
            <Text className="eyebrow" mb={3}>
              Technology
            </Text>
            <Text fontSize={{ base: 'xl', md: '2xl' }}>
              {project.stack.join(' · ')}
            </Text>
          </Box>
          {project.links && (
            <Stack direction={{ base: 'column', sm: 'row' }} align="flex-start">
              {project.links.map(link =>
                link.href.startsWith('/') ? (
                  <NextLink href={link.href} passHref key={link.href}>
                    <Button
                      as="a"
                      rightIcon={<ExternalLinkIcon />}
                      variant="outline"
                    >
                      {link.label}
                    </Button>
                  </NextLink>
                ) : (
                  <Button
                    as="a"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    rightIcon={<ExternalLinkIcon />}
                    variant="outline"
                    key={link.href}
                  >
                    {link.label}
                  </Button>
                )
              )}
            </Stack>
          )}
        </Flex>
      </Container>
    </Layout>
  )
}

export default ProjectDetail
