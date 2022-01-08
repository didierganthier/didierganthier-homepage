import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Alerte Rouge">
            <Container>
                <Title>
                    Alerte Rouge <Badge>2021 - </Badge>
                </Title>
            </Container>
            <P>
                Alerte Rouge is an application that allows users to create an account and create an alert for a blood request.
                The application will send an email to the compatible donors when the alert is created.
                User can also setup a meeting with CNTS to donate blood.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Android </Meta>
                    <Link href="https://play.google.com/store/apps/details?id=com.banj.alerterouge">
                       Android App <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> IOS </Meta>
                    <Link href="https://apps.apple.com/us/app/alerte-rouge-ht/id1597959813">
                       IOS App <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>Flutter, Firebase</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/alerterouge.png" alt="Alerte Rouge" />
        </Layout>        
    )
}

export default Work;