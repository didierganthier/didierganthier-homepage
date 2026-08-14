import NextLink from 'next/link'
import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import ProjectArtwork from './project-artwork'

const ProjectCard = ({ project, compact = false }) => {
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  return (
    <LinkBox as="article" role="group">
      <NextLink href={`/works/${project.slug}`} passHref>
        <LinkOverlay aria-label={`View the ${project.title} case study`} />
      </NextLink>
      <Box
        transition="transform .35s ease"
        _groupHover={{ transform: 'translateY(-6px)' }}
      >
        <ProjectArtwork project={project} compact={compact} />
      </Box>
      <Flex
        borderBottom="1px solid"
        borderColor={border}
        py={5}
        gap={5}
        align="flex-start"
        justify="space-between"
      >
        <Box>
          <Heading
            as="h3"
            fontSize={{ base: '2xl', md: compact ? '2xl' : '3xl' }}
            letterSpacing="-0.035em"
          >
            {project.title}
          </Heading>
          <Text color={muted} mt={2} lineHeight="1.65" maxW="600px">
            {project.summary}
          </Text>
        </Box>
        <Flex
          flexShrink={0}
          w="42px"
          h="42px"
          border="1px solid"
          borderColor={border}
          borderRadius="full"
          align="center"
          justify="center"
          transition="all .25s ease"
          _groupHover={{
            bg: 'brand.500',
            color: 'white',
            borderColor: 'brand.500',
            transform: 'rotate(-20deg)'
          }}
        >
          <ArrowForwardIcon />
        </Flex>
      </Flex>
    </LinkBox>
  )
}

export default ProjectCard
