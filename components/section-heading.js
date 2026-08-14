import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'

const SectionHeading = ({ eyebrow, title, description }) => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
  const muted = useColorModeValue('gray.600', 'whiteAlpha.700')

  return (
    <Box
      borderTop="1px solid"
      borderColor={border}
      pt={{ base: 5, md: 7 }}
      mb={{ base: 8, md: 12 }}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        gap={5}
      >
        <Box maxW="680px">
          <Text className="eyebrow" mb={3}>
            {eyebrow}
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '5xl' }}
            lineHeight="1.05"
            letterSpacing="-0.04em"
          >
            {title}
          </Heading>
        </Box>
        {description && (
          <Text
            maxW="390px"
            color={muted}
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.7"
            pt={{ md: 8 }}
          >
            {description}
          </Text>
        )}
      </Flex>
    </Box>
  )
}

export default SectionHeading
