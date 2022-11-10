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
                &quot;To-do list&quot; is a tool that helps to organize your day.
                A simple website that allows for doing that, and built using ES6 and Webpack!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Website </Meta>
                    <Link href="https://didierganthier.github.io/todo-list/">
                        Website <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>ES6, Webpack</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/todo-list.png" alt="Instagram Clone" />
        </Layout>
    )
}

export default Work;