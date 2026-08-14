import { Box, Flex, Text } from '@chakra-ui/react'

const ProjectArtwork = ({ project, compact = false }) => (
  <Box
    position="relative"
    minH={
      compact ? { base: '260px', md: '300px' } : { base: '300px', md: '400px' }
    }
    overflow="hidden"
    borderRadius={{ base: '20px', md: '28px' }}
    background={`linear-gradient(135deg, ${project.palette[0]} 0%, ${project.palette[1]} 100%)`}
    color="white"
    p={{ base: 6, md: 8 }}
    role="img"
    aria-label={`${project.title} project artwork`}
  >
    <Box
      position="absolute"
      w={{ base: '240px', md: '360px' }}
      h={{ base: '240px', md: '360px' }}
      border="1px solid"
      borderColor="whiteAlpha.400"
      borderRadius="full"
      top="50%"
      right={{ base: '-90px', md: '-70px' }}
      transform="translateY(-50%)"
    />
    <Box
      position="absolute"
      w={{ base: '150px', md: '230px' }}
      h={{ base: '150px', md: '230px' }}
      bg={project.accent}
      opacity={0.95}
      borderRadius="full"
      top="50%"
      right={{ base: '-40px', md: '-5px' }}
      transform="translateY(-50%)"
      boxShadow="0 28px 80px rgba(0,0,0,.25)"
    />
    <Box
      position="absolute"
      w={{ base: '88px', md: '120px' }}
      h={{ base: '88px', md: '120px' }}
      border="1px solid"
      borderColor="whiteAlpha.500"
      transform="rotate(18deg)"
      bottom={{ base: '-34px', md: '-45px' }}
      left={{ base: '42%', md: '48%' }}
    />

    <Flex
      position="relative"
      zIndex={1}
      direction="column"
      h="100%"
      minH="inherit"
      justify="space-between"
    >
      <Flex justify="space-between" align="center">
        <Text className="eyebrow" color="whiteAlpha.900">
          {project.type}
        </Text>
        <Text fontFamily="mono" fontSize="sm" color="whiteAlpha.800">
          {project.index} / 06
        </Text>
      </Flex>
      <Box>
        <Text
          fontFamily="heading"
          fontWeight="700"
          fontSize={
            compact ? { base: '5xl', md: '6xl' } : { base: '6xl', md: '8xl' }
          }
          lineHeight="0.9"
          letterSpacing="-0.08em"
          opacity={0.96}
        >
          {project.motif}
        </Text>
        <Text mt={4} fontSize="sm" color="whiteAlpha.800">
          {project.year}
        </Text>
      </Box>
    </Flex>
  </Box>
)

export default ProjectArtwork
