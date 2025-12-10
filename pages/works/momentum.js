import { Container, Badge, Link, ListItem, List } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Momentum">
            <Container>
                <Title>
                    Momentum <Badge>2025</Badge>
                </Title>
            </Container>

            <P>
                Never break a streak again! Momentum is your ultimate habit tracking
                companion that helps you build lasting habits with weekly freezes,
                accountability partners, and beautiful insights.
            </P>

            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS / Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Flutter, Firebase</span>
                </ListItem>
                <ListItem>
                    <Meta>Privacy Policy</Meta>
                    <Link href="/privacy">
                        View our Privacy Policy
                    </Link>
                </ListItem>
            </List>

            <P>
                <strong>Key Features:</strong>
            </P>

            <List ml={4} my={4}>
                <ListItem>📊 Track daily habit streaks</ListItem>
                <ListItem>❄️ Weekly streak freezes for recovery</ListItem>
                <ListItem>🤝 Connect with accountability partners</ListItem>
                <ListItem>📈 Beautiful statistics and insights</ListItem>
                <ListItem>🌙 Dark mode support</ListItem>
                <ListItem>📝 Pre-built habit templates</ListItem>
            </List>

            <P>
                Get weekly freezes, compete with friends on leaderboards, and build
                lasting habits together. Your accountability starts here. Start
                building lasting habits today!
            </P>

            <WorkImage src="/images/works/momentum.png" alt="Momentum" />
        </Layout>
    );
};

export default Work;
