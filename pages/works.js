import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import ProjectCard from '../components/project-card'
import Section from '../components/section'
import { projects } from '../data/portfolio'

const Works = () => {
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')

  return (
    <Layout title="Selected work">
      <Container maxW="container.xl" py={{ base: 14, md: 24 }}>
        <Text className="eyebrow" mb={5}>
          Selected work · 2021—2026
        </Text>
        <Heading
          as="h1"
          maxW="920px"
          fontSize={{ base: '5xl', md: '7xl' }}
          lineHeight=".96"
          letterSpacing="-0.06em"
        >
          Products shaped by the world around them.
        </Heading>
        <Text
          maxW="680px"
          mt={7}
          color={muted}
          fontSize={{ base: 'lg', md: 'xl' }}
          lineHeight="1.7"
        >
          Mobile applications, web platforms and AI systems designed around real
          constraints, real operators and outcomes that matter.
        </Text>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 14, lg: 9 }}
          mt={{ base: 16, md: 24 }}
        >
          {projects.map((project, index) => (
            <Section delay={Math.min(index * 0.05, 0.25)} key={project.slug}>
              <Box mt={{ lg: index % 2 ? 16 : 0 }}>
                <ProjectCard project={project} compact />
              </Box>
            </Section>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
