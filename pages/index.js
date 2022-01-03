import { Box, Container, Heading, Image, useColorModeValue, Link } from "@chakra-ui/react"
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center"> 
                Hello I'm a fullstack developer based in Haïti!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Didier Peran Ganthier
                    </Heading>
                    <p>Digital Visionary ( Developer / Illustrator ) </p>
                </Box>
                <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{md:6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/profile.jpg" alt="Profile Photo"/>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                Hello, I'm Didier Peran Ganthier. 
                Welcome to my website, I'm a freelance, fullstack developer and "illustrator" based in Haiti. 
                Illustrator is double quoted because I haven't been drawing much lately. 
                I am passionate about problem-solving and design-thinking. 
                When not online, I love to play basketball. 
                Currently, I am working on my product called{' '}
                <NextLink href="works/thespot">
                    <Link>The Spot Events</Link>
                </NextLink>.
                </Paragraph>
            </Section>
        </Container>
    );
}

export default Page