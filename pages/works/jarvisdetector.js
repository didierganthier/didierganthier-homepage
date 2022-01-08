import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Jarvis Object Detector">
            <Container>
                <Title>
                    Jarvis Object Detector <Badge>2021</Badge>
                </Title>
            </Container>
            <P>
                Jarvis Object Detector is an application that detects objects in a video stream.
                The application uses a pretrained model to detect objects in real-time.
                It is only available on Github for now. (Devs can contribute to the project)
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Github </Meta>
                    <Link href="https://github.com/didierganthier/jarvis_object_detector_app">
                       Source Code <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>Flutter</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/jarvisdetector.png" alt="Jarvis Detector" />
        </Layout>        
    )
}

export default Work;