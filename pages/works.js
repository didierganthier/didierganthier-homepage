import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbTheSpot from "../public/images/works/screens.png";
import thumbAlerteRouge from "../public/images/works/alerterouge.png";
import thumbBatteryChecker from "../public/images/works/batterychecker.png";
import thumbCovidTracker from "../public/images/works/covidtrack.jpeg";
import thumbObjectDetector from "../public/images/works/jarvisdetector.png";
import thumbInstagramClone from "../public/images/works/instagram-clone.png";
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="thespot" title="The Spot Events" thumbnail={thumbTheSpot}>
                        An app that connects events organizers and participants.
                        The Spot is the smart choice for your event ticketing needs. It helps you find the best events in your area.
                    </WorkGridItem>    
                </Section>
                <Section delay={0.2}>
                    <WorkGridItem id="alerterouge" title="Alerte Rouge" thumbnail={thumbAlerteRouge}>
                        Alerte Rouge is a mobile app that helps find suitable blood donors.
                        It helps you bring awareness to your blood request.
                    </WorkGridItem>    
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="jarvisdetector" title="Object Detector (Jarvis)" thumbnail={thumbObjectDetector}>
                        Object Recognition and Detection using Mobile Vision API.
                    </WorkGridItem>    
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="instagramclone" title="React Instagram Clone" thumbnail={thumbInstagramClone}>
                        Simple Instagram Clone with React and Firebase.
                    </WorkGridItem>    
                </Section>
            </SimpleGrid>
            <Section delay={0.4}>
                <Divider my={6}/>
                <Heading as="h3" fontSize={20} mb={4}>
                    Old Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.5}>
                        <WorkGridItem id="batterychecker" title="Battery Checker" thumbnail={thumbBatteryChecker}>
                            Battery Checker is a mobile app that helps you to check your battery level. 
                            Launches an alarm to tell you to disconnect the charger.
                            
                        </WorkGridItem>    
                    </Section>
                    <Section delay={0.6}>
                    <WorkGridItem id="covidtracker" title="Covid Tracker" thumbnail={thumbCovidTracker}>
                        Covid Tracker is a mobile app that helps you to track the latest updates of COVID-19. (Only Source Code is available)
                    </WorkGridItem>    
                </Section>
                </SimpleGrid>
            </Section>
        </Container>
        </Layout>
    );
};

export default Works;