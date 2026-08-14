import NextLink from 'next/link'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import Layout from '../components/layouts/article'
import ProjectCard from '../components/project-card'
import Section from '../components/section'
import SectionHeading from '../components/section-heading'
import { capabilities, experiences, projects } from '../data/portfolio'

const Home = () => {
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const panel = useColorModeValue('white', '#141B24')
  const soft = useColorModeValue('#EDE9E1', '#18212C')
  const invertedText = useColorModeValue('#F6F2E9', '#101820')
  const invertedBg = useColorModeValue('#101820', '#F6F2E9')
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <Layout>
      <Container maxW="container.xl">
        <SimpleGrid
          columns={{ base: 1, lg: 12 }}
          gap={{ base: 12, lg: 10 }}
          minH={{ lg: 'calc(100vh - 96px)' }}
          alignItems="center"
          py={{ base: 14, md: 20, lg: 10 }}
        >
          <Box gridColumn={{ lg: 'span 8' }}>
            <Flex align="center" gap={3} mb={7}>
              <Box w="8px" h="8px" borderRadius="full" bg="brand.500" />
              <Text className="eyebrow">
                Port-au-Prince, Haiti · Working globally
              </Text>
            </Flex>
            <Heading
              as="h1"
              maxW="980px"
              fontSize={{ base: '5xl', sm: '6xl', md: '7xl', xl: '8xl' }}
              lineHeight={{ base: '.98', md: '.93' }}
              letterSpacing="-0.065em"
            >
              I build digital products that hold up in the{' '}
              <Box as="span" color="brand.500">
                real world.
              </Box>
            </Heading>
            <Text
              maxW="720px"
              mt={{ base: 7, md: 9 }}
              fontSize={{ base: 'lg', md: '2xl' }}
              lineHeight="1.55"
              color={muted}
              letterSpacing="-0.015em"
            >
              I&apos;m Didier Ganthier, a Senior Software Engineer working
              across mobile, web, AI and civic infrastructure. I turn complex
              operational problems into clear, dependable products.
            </Text>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={3}
              mt={9}
              align={{ base: 'stretch', sm: 'center' }}
            >
              <NextLink href="/works" passHref>
                <Button
                  as="a"
                  size="lg"
                  rightIcon={<ArrowForwardIcon />}
                  bg="brand.500"
                  color="white"
                  _hover={{ bg: 'brand.600', transform: 'translateY(-2px)' }}
                >
                  View selected work
                </Button>
              </NextLink>
              <Button
                as="a"
                href="mailto:didierganthierperan@gmail.com"
                size="lg"
                variant="outline"
                leftIcon={<EmailIcon />}
              >
                Start a conversation
              </Button>
            </Stack>
          </Box>

          <Box
            gridColumn={{ lg: 'span 4' }}
            position="relative"
            maxW={{ base: '520px', lg: 'none' }}
          >
            <Box
              position="absolute"
              inset={{
                base: '-12px 12px 12px -12px',
                md: '-18px 18px 18px -18px'
              }}
              border="1px solid"
              borderColor={border}
              borderRadius="28px"
              transform="rotate(-3deg)"
            />
            <Box
              position="relative"
              overflow="hidden"
              borderRadius="28px"
              bg="#17120F"
              sx={{ aspectRatio: '4 / 5' }}
            >
              <Image
                src="/images/profile.jpg"
                alt="Portrait of Didier Ganthier"
                w="100%"
                h="100%"
                objectFit="cover"
                objectPosition="50% 35%"
                filter="saturate(.82) contrast(1.04)"
              />
              <Box
                position="absolute"
                inset={0}
                bg="linear-gradient(180deg, transparent 55%, rgba(0,0,0,.75) 100%)"
              />
              <Box
                position="absolute"
                left={6}
                right={6}
                bottom={6}
                color="white"
              >
                <Text className="eyebrow" color="whiteAlpha.800">
                  Current focus
                </Text>
                <Text mt={2} fontSize="xl" fontWeight="600">
                  Resilient products · Applied AI · Haiti
                </Text>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>

        <SimpleGrid
          columns={{ base: 2, md: 4 }}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor={border}
          mb={{ base: 20, md: 32 }}
        >
          {[
            ['12+', 'Years building'],
            ['1K+', 'Users on The Spot'],
            ['4', 'Product disciplines'],
            ['HT · Global', 'Perspective']
          ].map(([value, label], index) => (
            <Box
              key={label}
              py={{ base: 6, md: 8 }}
              px={{ base: 3, md: 6 }}
              borderRight={{
                base: index % 2 === 0 ? '1px solid' : 'none',
                md: index < 3 ? '1px solid' : 'none'
              }}
              borderBottom={{
                base: index < 2 ? '1px solid' : 'none',
                md: 'none'
              }}
              borderColor={border}
            >
              <Text
                fontSize={{ base: '2xl', md: '3xl' }}
                fontWeight="700"
                letterSpacing="-0.04em"
              >
                {value}
              </Text>
              <Text color={muted} fontSize="sm" mt={1}>
                {label}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <Section delay={0.05}>
          <SectionHeading
            eyebrow="Selected work · 2021—2026"
            title="Technology with a job to do."
            description="The strongest work starts with the environment around it: who needs it, what can fail and what a useful outcome actually looks like."
          />
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 12, lg: 8 }}>
            {featuredProjects.map((project, index) => (
              <Box key={project.slug} mt={{ lg: index % 2 ? 16 : 0 }}>
                <ProjectCard project={project} compact />
              </Box>
            ))}
          </SimpleGrid>
          <Flex justify="center" mt={{ base: 10, md: 16 }}>
            <NextLink href="/works" passHref>
              <Button
                as="a"
                size="lg"
                variant="outline"
                rightIcon={<ArrowForwardIcon />}
              >
                Explore all case studies
              </Button>
            </NextLink>
          </Flex>
        </Section>

        <Section delay={0.08}>
          <Box py={{ base: 20, md: 32 }}>
            <SectionHeading
              eyebrow="What I do"
              title="From product ambiguity to working software."
              description="I work across the decisions that connect an idea to a reliable release—product framing, architecture, interface and iteration."
            />
            <SimpleGrid
              columns={{ base: 1, md: 2, lg: 4 }}
              gap={0}
              border="1px solid"
              borderColor={border}
              borderRadius="24px"
              overflow="hidden"
            >
              {capabilities.map((item, index) => (
                <Box
                  key={item.number}
                  p={{ base: 7, md: 8 }}
                  minH={{ md: '310px' }}
                  bg={index === 0 ? invertedBg : panel}
                  color={index === 0 ? invertedText : 'inherit'}
                  borderRight={{ lg: index < 3 ? '1px solid' : 'none' }}
                  borderBottom={{
                    base: index < 3 ? '1px solid' : 'none',
                    lg: 'none'
                  }}
                  borderColor={border}
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  <Text fontFamily="mono" fontSize="sm" opacity={0.65}>
                    {item.number}
                  </Text>
                  <Box mt={16}>
                    <Heading as="h3" fontSize="2xl" letterSpacing="-0.035em">
                      {item.title}
                    </Heading>
                    <Text mt={4} opacity={0.72} lineHeight="1.7">
                      {item.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Box>
        </Section>

        <Section delay={0.1}>
          <SectionHeading
            eyebrow="Experience"
            title="Built in teams. Shipped across contexts."
            description="I have worked inside product companies, early-stage teams and learning communities—often remotely, always close to the work."
          />
          <Box>
            {experiences.map(item => (
              <SimpleGrid
                key={`${item.company}-${item.period}`}
                columns={{ base: 1, md: 12 }}
                gap={{ base: 2, md: 6 }}
                py={{ base: 7, md: 9 }}
                borderTop="1px solid"
                borderColor={border}
                alignItems="start"
              >
                <Text gridColumn={{ md: 'span 2' }} className="eyebrow" pt={1}>
                  {item.period}
                </Text>
                <Box gridColumn={{ md: 'span 4' }}>
                  <Heading
                    as="h3"
                    fontSize={{ base: 'xl', md: '2xl' }}
                    letterSpacing="-0.03em"
                  >
                    {item.role}
                  </Heading>
                  <Text color="brand.500" mt={1} fontWeight="600">
                    {item.company}
                  </Text>
                </Box>
                <Text
                  gridColumn={{ md: 'span 6' }}
                  color={muted}
                  fontSize="lg"
                  lineHeight="1.7"
                >
                  {item.description}
                </Text>
              </SimpleGrid>
            ))}
          </Box>
        </Section>

        <Section delay={0.12}>
          <SimpleGrid
            columns={{ base: 1, lg: 2 }}
            gap={{ base: 10, lg: 16 }}
            py={{ base: 20, md: 32 }}
          >
            <Box bg={soft} borderRadius="28px" p={{ base: 8, md: 12 }}>
              <Text className="eyebrow" mb={6}>
                Beyond the code
              </Text>
              <Heading
                as="h2"
                fontSize={{ base: '3xl', md: '5xl' }}
                lineHeight="1.08"
                letterSpacing="-0.045em"
              >
                Building the ecosystem around the product.
              </Heading>
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center">
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                lineHeight="1.75"
                color={muted}
              >
                I teach AI and UX, mentor developers and contribute to
                Haiti&apos;s technology community through programs such as
                DevExpo, Microverse and codebar. I also write about software,
                machine learning and the role technology can play in developing
                economies.
              </Text>
              <Stack direction="row" spacing={2} mt={7} flexWrap="wrap">
                <NextLink href="/posts" passHref>
                  <Button as="a" variant="outline">
                    Read my writing
                  </Button>
                </NextLink>
                <Button
                  as="a"
                  href="https://www.linkedin.com/in/didierganthier"
                  target="_blank"
                  rel="noreferrer"
                  variant="ghost"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  LinkedIn
                </Button>
              </Stack>
            </Box>
          </SimpleGrid>
        </Section>

        <Section delay={0.14}>
          <Box
            id="contact"
            bg="#101820"
            color="white"
            borderRadius={{ base: '24px', md: '36px' }}
            px={{ base: 7, md: 14 }}
            py={{ base: 12, md: 20 }}
            mb={{ base: 16, md: 24 }}
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              w="280px"
              h="280px"
              borderRadius="full"
              bg="brand.500"
              opacity={0.18}
              right="-80px"
              top="-120px"
            />
            <Text className="eyebrow" color="whiteAlpha.700">
              Have a meaningful problem?
            </Text>
            <Heading
              mt={5}
              maxW="850px"
              fontSize={{ base: '4xl', md: '6xl' }}
              lineHeight="1.02"
              letterSpacing="-0.055em"
            >
              Let&apos;s turn it into something people can use.
            </Heading>
            <Flex mt={9} gap={3} flexWrap="wrap">
              <Button
                as="a"
                href="mailto:didierganthierperan@gmail.com"
                size="lg"
                bg="brand.500"
                color="white"
                _hover={{ bg: 'brand.600' }}
                rightIcon={<ArrowForwardIcon />}
              >
                Email Didier
              </Button>
              <Button
                as="a"
                href="https://github.com/didierganthier"
                target="_blank"
                rel="noreferrer"
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                GitHub
              </Button>
            </Flex>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home
