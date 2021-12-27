import { Box, Container, Heading } from "@chakra-ui/react"

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="red" p={3} mb={6} textColor="white" align="center"> 
                Hello I'm a fullstack developer based in Haïti!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Didier Peran Ganthier
                    </Heading>
                    <p>Digital Visionary ( Developer / Artist ) </p>
                </Box>
            </Box>
        </Container>
    );
}

export default Page