import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import thumbAlerteRouge from "../public/images/works/alerterouge.png";
import thumbBatteryChecker from "../public/images/works/batterychecker.png";
import thumbCovidTracker from "../public/images/works/covidtrack.jpeg";
import thumbBookstore from "../public/images/works/bookstore.png";
import thumbMathMagicians from "../public/images/works/math-magicians.png";
import thumbTodoList from "../public/images/works/todo-list.png";
import Layout from "../components/layouts/article";
import Link from "next/link";

const Works = () => {
    return (
        <Layout>
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section delay={0.2}>
                        <WorkGridItem id="alerterouge" title="Alerte Rouge" thumbnail={thumbAlerteRouge}>
                            Alerte Rouge is a mobile app that helps find suitable blood donors.
                            It helps you bring awareness to your blood request. A perfect rating of 5/5 on the Play Store.
                            Built with Flutter, Firebase, Node.js and Google Cloud Platform.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="bookstore" title="Bookstore React" thumbnail={thumbBookstore}>
                            MVP version of a Bookstore that allows you to:
                            Display a list of books. Add a book. Remove a selected book.
                            Built with React, Linters and Tailwind CSS.
                            Used Redux for state management.
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="math-magicians" title="Math magicians" thumbnail={thumbMathMagicians}>
                        &quot;Math magicians&quot; is a website for all fans of mathematics. 
                        It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.
                        Built with React, Linters, Tailwind CSS. 
                        Added unit and integration tests with Jest in collaboration wih <Link href="https://github.com/JonahKayizzi">Jonathan Kayizzi</Link>
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem id="todo-list" title="To-do List" thumbnail={thumbTodoList}>
                        &quot;To-do list&quot; is a tool that helps to organize your day. 
                        A simple website that allows for doing that, and built using ES6 and Webpack!
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.4}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={4}>
                        Old Works
                    </Heading>
                    <SimpleGrid columns={[1, 1, 2]} gap={6}>
                        <Section delay={0.5}>
                            <WorkGridItem id="batterychecker" title="Battery Checker" thumbnail={thumbBatteryChecker}>
                                Battery Checker is a mobile app that helps you to check your battery level.
                                Launches an alarm to tell you to disconnect the charger.
                                First app I built with Java and Android Studio.
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