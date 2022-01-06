import { Box, Container, Heading, Image, useColorModeValue, Link, Button } from "@chakra-ui/react"
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";

const Page = () => {
    return (
        <Layout>
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
                <Box align="center" my={4}>
                    <NextLink href="works/">
                        <Button rightIcon={<ChevronRightIcon/>} colorScheme="teal">
                            My Portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>1998</BioYear>
                    Born in Port-au-Prince, Haiti.   
                </BioSection>
                <BioSection>
                    <BioYear>2014</BioYear>
                    Started coding with Python and C. Completed first project (Calculator).  
                </BioSection>
                <BioSection>
                    <BioYear>2018</BioYear>
                    Started studying Computer Science at Université Espoir.  
                </BioSection> 
                <BioSection>
                    <BioYear>2019</BioYear>
                    Took part at Codepath's Mobile App Development Bootcamp.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Worked at Transition Digitale.  
                </BioSection> 
                <BioSection>
                    <BioYear>2021</BioYear>
                    Launched The Spot Events with the help of Alpha Haïti's incubator. A platform connecting organizers and event participants, allowing check-ins, promotions and online payment. 
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Working on Alerte Rouge in partnership with Banj and CNTS. A platform for the public to share blood requests and plan donations at CNTS..
                </BioSection>
                <BioSection>
                    <BioYear>2022 to Present</BioYear>
                    Works as a freelance.  
                </BioSection>  
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    I ♥
                </Heading>
                <Paragraph>
                    God, Music, Technology,{' '}
                    <Link href="https://www.instagram.com/p/BTcpaB3gltu/" target="_blank">Drawing</Link>
                    , Coffee, {' '}
                    <Link href="https://www.instagram.com/didierthelilballer/" target="_blank">Basketball</Link> 
                    , Machine Learning and Philosophy.
                </Paragraph>        
            </Section>            
        </Container>
        </Layout>
    );
}

export default Page