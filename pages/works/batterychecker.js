import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Battery Checker">
            <Container>
                <Title>
                    Battery Checker <Badge>2019</Badge>
                </Title>
            </Container>
            <P>
                Battery Checker allows you to check the battery level of your device.
                It gives you a warning if your battery is full and the phone is still charging.
                It shows you when the phone is charging as well. This is my first ever published project.
                Only available on Android.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Android </Meta>
                    <Link href="https://play.google.com/store/apps/details?id=com.application.fullbatterywarning">
                       Android App <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>Java</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/batterychecker.png" alt="Battery Checker" />
        </Layout>        
    )
}

export default Work;