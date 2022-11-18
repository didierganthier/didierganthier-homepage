import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbSmartContract from '../public/images/contents/medium-smart-contract.jpeg'
import didierResized from '../public/images/contents/didier-resize.jpeg'

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
            thumbnail={didierResized}
            href="https://medium.com/@didierganthier/the-biggest-non-technical-lessons-learned-in-my-journey-as-a-developer-96ec948c3df7"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts