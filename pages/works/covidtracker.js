import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="COVID TRACKER">
            <Container>
                <Title>
                    COVID TRACKER <Badge>2019 - 2020</Badge>
                </Title>
            </Container>
            <P>
                COVID TRACKER is an application that allows users to track the number of confirmed cases of COVID-19.
                The application is built using Flutter and it fetches the data from a public API.
                At the end of the day it sends data of number of daily cases to the user through a notification.
                My first project in Flutter.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Github </Meta>
                    <Link href="https://github.com/didierganthier/track_covid">
                       Source Code <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>Flutter</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/covidtrack.jpeg" alt="COVID TRACK" />
        </Layout>        
    )
}

export default Work;