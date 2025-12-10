import { Container, Heading, SimpleGrid, Box, Button, Input, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbSmartContract from '../public/images/contents/medium-smart-contract.jpeg'
import microverseImg from '../public/images/contents/microverse.png'
import gradientImg from '../public/images/contents/gradient-container.png'
import absurdismImg from '../public/images/contents/absurdism.jpg'
import schrodingerImg from '../public/images/contents/schrodinger.jpg'
import devopsImg from '../public/images/contents/devops.jpg'
import footballMLImg from '../public/images/contents/ronaldo.jpg'
import bakingArchImg from '../public/images/contents/baking.jpg'
import partialPrerenderImg from '../public/images/contents/nextjs-prerender.jpg'
// LinkedIn articles
import secretWeaponMLImg from '../public/images/contents/secret-weapon-ml.jpg'
import aiDevelopingEconomiesImg from '../public/images/contents/ai-developing-economies.jpg'
import learningEngineImg from '../public/images/contents/learning-engine.jpg'
import aiMetamorphosisImg from '../public/images/contents/ai-metamorphosis.jpg'
import futureMediaImg from '../public/images/contents/future-media.jpg'
import turingTestImg from '../public/images/contents/turing-test.jpg'
import threeLawsImg from '../public/images/contents/three-laws.jpg'
import neuralNetworksImg from '../public/images/contents/neural-networks.jpg'


const Posts = () => {
  const [filter, setFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const allPosts = [
    {
      title: "The Secret Weapon in Machine Learning",
      thumbnail: secretWeaponMLImg,
      href: "https://www.linkedin.com/pulse/secret-weapon-machine-learning-didier-ganthier--nie3e/?trackingId=zz6ofDeTQ9ymyDbWhfbSuQ%3D%3DL",
      platform: "linkedin"
    },
    {
      title: "Partial Prerendering: A New Dawn in Web Performance",
      thumbnail: partialPrerenderImg,
      href: "https://medium.com/@didierganthier/partial-prerendering-a-new-dawn-in-web-performance-b19a61ceb272",
      platform: "medium"
    },
    {
      title: "Bake It 'Til You Make It: Why Good Software Architecture is Like Baking a Cake 🎂",
      thumbnail: bakingArchImg,
      href: "https://medium.com/@didierganthier/bake-it-til-you-make-it-why-good-software-architecture-is-like-baking-a-cake-065c7f0e6e81",
      platform: "medium"
    },
    {
      title: "The Football Analogy: Understanding Machine Learning and Deep Learning",
      thumbnail: footballMLImg,
      href: "https://medium.com/@didierganthier/the-football-analogy-understanding-machine-learning-and-deep-learning-44dbeece9b32",
      platform: "medium"
    },
    {
      title: "Harnessing AI for the Growth of Developing Economies",
      thumbnail: aiDevelopingEconomiesImg,
      href: "https://www.linkedin.com/pulse/harnessing-ai-growth-developing-economies-didier-ganthier-isixe/?trackingId=Wmnn6yZ9SWORQb8uh1ES3Q%3D%3D",
      platform: "linkedin"
    },
    {
      title: "How DevOps Brings Flexibility and Speed to the Traditional Waterfall Approach",
      thumbnail: devopsImg,
      href: "https://medium.com/@didierganthier/how-devops-brings-flexibility-and-speed-to-the-traditional-waterfall-approach-7e67410d7317",
      platform: "medium"
    },
    {
      title: "Personal Superintelligence: Schrödinger's Cat in the Quest for Human Meaning",
      thumbnail: schrodingerImg,
      href: "https://medium.com/@didierganthier/personal-superintelligence-schr%C3%B6dingers-cat-in-the-quest-for-human-meaning-5df0d379f8d9",
      platform: "medium"
    },
    {
      title: "Write a Plane Ticket Booking Smart Contract in Solidity",
      thumbnail: thumbSmartContract,
      href: "https://coinsbench.com/write-a-plane-ticket-booking-smart-contract-in-solidity-334a8e03bb64",
      platform: "medium"
    },
    {
      title: "The Learning Engine: A Comprehensive Guide to Machine Intelligence",
      thumbnail: learningEngineImg,
      href: "https://www.linkedin.com/pulse/learning-engine-comprehensive-guide-machine-didier-ganthier-p9mze/",
      platform: "linkedin"
    },
    {
      title: "AI Metamorphosis: A Forever-Changed World",
      thumbnail: aiMetamorphosisImg,
      href: "https://www.linkedin.com/pulse/ai-metamorphosis-forever-changed-world-didier-ganthier-9ybhe/?trackingId=Wmnn6yZ9SWORQb8uh1ES3Q%3D%3D",
      platform: "linkedin"
    },
    {
      title: "The Future of Media: A Deep Dive into OpenAI's Sora",
      thumbnail: futureMediaImg,
      href: "https://www.linkedin.com/pulse/future-media-deep-dive-openais-sora-didier-ganthier-silke/?trackingId=Wmnn6yZ9SWORQb8uh1ES3Q%3D%3D",
      platform: "linkedin"
    },
    {
      title: "The Turing Test: Separating AI from Humanity.",
      thumbnail: turingTestImg,
      href: "https://www.linkedin.com/pulse/turing-test-separating-ai-from-humanity-didier-ganthier-d8cje/?trackingId=Wmnn6yZ9SWORQb8uh1ES3Q%3D%3D",
      platform: "linkedin"
    },
    {
      title: "From Three Laws to Today: Isaac Asimov's Impact on AI and Ethics",
      thumbnail: threeLawsImg,
      href: "https://www.linkedin.com/pulse/from-three-laws-today-isaac-asimovs-impact-ai-ethics-didier-ganthier-6ga6e/?trackingId=Wmnn6yZ9SWORQb8uh1ES3Q%3D%3D",
      platform: "linkedin"
    },
    {
      title: "Neural Networks: How AI Mimics the Brain",
      thumbnail: neuralNetworksImg,
      href: "https://www.linkedin.com/pulse/neural-networks-how-ai-mimics-thebrain-didier-ganthier-wpv0e/?trackingId=Wmnn6yZ9SWORQb8uh1ES3Q%3D%3D",
      platform: "linkedin"
    },
    {
      title: "The biggest non-technical lessons learned in my journey as a developer",
      thumbnail: microverseImg,
      href: "https://medium.com/@didierganthier/the-biggest-non-technical-lessons-learned-in-my-journey-as-a-developer-96ec948c3df7",
      platform: "medium"
    },
    {
      title: "Creating a Linear Gradient Container in Flutter",
      thumbnail: gradientImg,
      href: "https://medium.com/@didierganthier/creating-a-linear-gradient-container-in-flutter-39b64f77d9da",
      platform: "medium"
    },
    {
      title: "Embracing the Paradox: The Pursuit of Meaning in an Absurd World",
      thumbnail: absurdismImg,
      href: "https://medium.com/@didierganthier/embracing-the-paradox-the-pursuit-of-meaning-in-an-absurd-world-8fb1512bc02e",
      platform: "medium"
    }
  ]

  const filteredPosts = allPosts.filter(post => {
    const matchesFilter = filter === 'all' || post.platform === filter
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>

        <Box mb={6}>
          <HStack spacing={4} mb={4} flexWrap="wrap">
            <Button
              size="sm"
              colorScheme={filter === 'all' ? 'teal' : 'gray'}
              onClick={() => setFilter('all')}
            >
              All ({allPosts.length})
            </Button>
            <Button
              size="sm"
              colorScheme={filter === 'medium' ? 'teal' : 'gray'}
              onClick={() => setFilter('medium')}
            >
              Medium ({allPosts.filter(p => p.platform === 'medium').length})
            </Button>
            <Button
              size="sm"
              colorScheme={filter === 'linkedin' ? 'teal' : 'gray'}
              onClick={() => setFilter('linkedin')}
            >
              LinkedIn ({allPosts.filter(p => p.platform === 'linkedin').length})
            </Button>
          </HStack>

          <Input
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="md"
          />
        </Box>

        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {filteredPosts.map((post, index) => (
              <GridItem
                key={index}
                title={post.title}
                thumbnail={post.thumbnail}
                href={post.href}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
