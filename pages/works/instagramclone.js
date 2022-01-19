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
                React Instagram Clone <Badge>2021</Badge>
                </Title>
            </Container>
            <P>
                Just a simple Instagram Clone with limited funcs.
                So far you can only Login, Signup, and create a post.
                You can also like and comment on other posts.
                The UI needs to be improved ik.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Website </Meta>
                    <Link href="https://instagram-clone-react-3af94.firebaseapp.com/">
                       Website <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>React, Firebase</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/instagram-clone.png" alt="Instagram Clone" />
        </Layout>        
    )
}

export default Work;