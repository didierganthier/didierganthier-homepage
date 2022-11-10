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
                MVP version of a Bookstore that allows you to:
                Display a list of books. Add a book. Remove a selected book.
                Built with React, Linters and Tailwind CSS.
                Used Redux for state management.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta> Website </Meta>
                    <Link href="https://bookstore-react-sand.vercel.app/">
                        Website <ExternalLinkIcon mr={2} />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta> Stack </Meta>
                    <span>React, Redux, Tailwind CSS</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/bookstore.png" alt="Instagram Clone" />
        </Layout>
    )
}

export default Work;