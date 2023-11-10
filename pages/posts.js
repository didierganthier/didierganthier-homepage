import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbSmartContract from '../public/images/contents/medium-smart-contract.jpeg'
import microverseImg from '../public/images/contents/microverse.png'
import gradientImg from '../public/images/contents/gradient-container.png'
import absurdismImg from '../public/images/contents/absurdism.jpg'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Write a Plane Ticket Booking Smart Contract in Solidity"
            thumbnail={thumbSmartContract}
            href="https://coinsbench.com/write-a-plane-ticket-booking-smart-contract-in-solidity-334a8e03bb64"
          />
          <GridItem
            title="The biggest non-technical lessons learned in my journey as a developer"
            thumbnail={microverseImg}
            href="https://medium.com/@didierganthier/the-biggest-non-technical-lessons-learned-in-my-journey-as-a-developer-96ec948c3df7"
          />
          <GridItem
            title="Creating a Linear Gradient Container in Flutter"
            thumbnail={gradientImg}
            href="https://medium.com/@didierganthier/creating-a-linear-gradient-container-in-flutter-39b64f77d9da"
          />
          <GridItem
            title="Embracing the Paradox: The Pursuit of Meaning in an Absurd World"
            thumbnail={absurdismImg}
            href="https://medium.com/@didierganthier/embracing-the-paradox-the-pursuit-of-meaning-in-an-absurd-world-8fb1512bc02e"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts