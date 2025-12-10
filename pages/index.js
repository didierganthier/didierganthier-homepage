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
                    <p>Full Stack Developer </p>
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
                Hi, I&apos;m Didier Ganthier, a Haitian full-stack software engineer and dedicated tech advocate with extensive experience in web and mobile development, 
                utilizing technologies such as Flutter, React, and Node.js. Beyond his engineering roles for companies like IM Digital and Matchpoint AI, 
                Ganthier is deeply involved in building Haiti&apos;s local tech ecosystem through mentorship and content creation, serving as a content reviewer 
                for Stack Overflow and a mentor for platforms like Microverse and codebar. He has co-founded several impactful Haitian projects, including{' '}
                <NextLink href="works/thespot">
                    <Link>The Spot Events</Link>
                </NextLink>{' '}
                platform, the{' '}
                <NextLink href="works/alerterouge">
                    <Link>Alerte Rouge</Link>
                </NextLink>{' '}
                blood donation system, and the Haiti Blockchain Alliance, while also contributing as a key collaborator for the DevExpo technology conference.
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
                    Started coding.  
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
                    <BioYear>2020</BioYear>
                    Internship at Transition Digital as a Mobile Developer. Fixed 20+ bugs and implemented 10+ features in in-production apps.
                </BioSection> 
                <BioSection>
                    <BioYear>2021</BioYear>
                    Launched The Spot Events. A 1k users platform connecting event lovers, allowing check-ins, promotions and online payment. 
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Working on Alerte Rouge in partnership with Banj and CNTS. A platform for the public to share blood requests and plan donations at CNTS.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Launched Haiti Blockchain Alliance with Banj. A community of blockchain developers and enthusiasts in Haiti.
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Started Microverse. A remote software development program that uses pair programming and project building to teach development. 
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Began coaching for Codebar, participating in virtual workshops and coaching students globally to learn to code.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Started as Content Reviewer for Stack Overflow, helping new users by reviewing questions, answers, and identifying high-quality content.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Joined Matchpoint AI as Frontend Web Developer, working on improving the frontend of their emerging AI SaaS platform (until May 2024).
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Served as Code Reviewer and Student Mentor at Microverse, reviewing student code submissions and providing feedback.
                </BioSection>
                <BioSection>
                    <BioYear>2023</BioYear>
                    Completed Diploma of Education in Computer Science from Microverse.
                </BioSection>
                <BioSection>
                    <BioYear>2024</BioYear>
                    Published technical articles on AI and Machine Learning on Medium, including &quot;The Learning Engine&quot; and &quot;Harnessing AI for the Growth of Developing Economies&quot;.
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Joined IM Digital as Software Engineer, refining new products and ensuring code quality. Company achieved Shopify Platinum Partner status.
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Began pursuing Engineer&apos;s degree at Le Wagon, focusing on Python, data analysis, machine learning, and deep learning.
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Key collaborator for DevExpo technology conference, featured presence at the event.
                </BioSection>
                <BioSection>
                    <BioYear>2025</BioYear>
                    Published &quot;The Secret Weapon in Machine Learning&quot; article on LinkedIn.
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