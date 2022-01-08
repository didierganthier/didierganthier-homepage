import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="The Spot Events">
            <Container>
                <Title>
                    The Spot Events <Badge>2020 - </Badge>
                </Title>
            </Container>
            <P>
                The Spot Events is an application that allows users to buy tickets for events and share them with their friends.
                Event organizers can track the number of tickets sold and the number of tickets remaining. 
                They can also communicate with the users through the application.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Website </Meta>
                    <Link href="https://thespotlighter.org/">
                       https://thespotlighter.org <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Android </Meta>
                    <Link href="https://play.google.com/store/apps/details?id=spotlight.spotlight_flutter">
                       Android App <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> IOS </Meta>
                    <Link href="https://apps.apple.com/us/app/thespot-events/id1549586106">
                       IOS App <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>NodeJS, Electron, Flutter, Firebase</span>
                </ListItem>
                <ListItem>
                    <Meta> Media Coverage </Meta>
                    <Link href="https://belidemag.net/?p=5214">
                          https://belidemag.net/?p=5214 <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
            </List>
            <WorkImage src="/images/works/screens.png" alt="The Spot Events" />
            <WorkImage src="/images/works/website.png" alt="The Spot Events" />
        </Layout>        
    )
}

export default Work;