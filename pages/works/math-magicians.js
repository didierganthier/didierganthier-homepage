import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="React Instagram Clone">
            <Container>
                <Title>
                    Bookstore <Badge>2022</Badge>
                </Title>
            </Container>
            <P>
                &quot;Math magicians&quot; is a website for all fans of mathematics.
                It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.
                Built with React, Linters, Tailwind CSS.
                Added unit and integration tests with Jest in collaboration wih <Link href="https://github.com/JonahKayizzi">Jonathan Kayizzi</Link>
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Website </Meta>
                    <Link href="https://math-magicians-didier.netlify.app/">
                        Website <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>React, Jest, Tailwind CSS</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/math-magicians.png" alt="Instagram Clone" />
        </Layout>
    )
}

export default Work;