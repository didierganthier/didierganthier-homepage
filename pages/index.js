import { Box, Container, Heading, Image, useColorModeValue, Link, Icon, List, ListItem, Button } from "@chakra-ui/react"
import Paragraph from "../components/paragraph";
import Section from "../components/section";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Layout from "../components/layouts/article";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook} from 'react-icons/io';

const Page = () => {
    return (
        <Layout>
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center"> 
                Hello I&apos;m a fullstack developer based in Haïti!
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
                Hello, I&apos;m Didier Peran Ganthier. 
                Welcome to my website, I&apos;m a freelance, fullstack developer and &quot;illustrator&quot; based in Haiti. 
                Illustrator is double quoted because I haven&apos;t been drawing much lately. 
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
                    Took part at Codepath&apos;s Mobile App Development Bootcamp.
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Worked at Transition Digitale.  
                </BioSection> 
                <BioSection>
                    <BioYear>2021</BioYear>
                    Launched The Spot Events with the help of Alpha Haïti&apos;s incubator. A platform connecting organizers and event participants, allowing check-ins, promotions and online payment. 
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
            <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/didierganthier" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @didierganthier
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/didierganthier_" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @didierganthier_
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/didierganthier" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @didierganthier
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/ganthier.didier.79" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoFacebook} />}
              >
                @ganthier.didier.79_
              </Button>
            </Link>
          </ListItem>
        </List>
        </Section>            
        </Container>
        </Layout>
    );
}

export default Page