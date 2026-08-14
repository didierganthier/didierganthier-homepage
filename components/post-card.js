import Image from 'next/image'
import {
  Box,
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const platformLabels = {
  medium: 'Medium',
  linkedin: 'LinkedIn'
}

const PostCard = ({ post, index, total }) => {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.200')

  const displayIndex = String(index + 1).padStart(2, '0')
  const displayTotal = String(total).padStart(2, '0')

  return (
    <LinkBox as="article" role="group">
      <LinkOverlay
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read the article: ${post.title}`}
      />
      <Box
        transition="transform .35s ease"
        _groupHover={{ transform: 'translateY(-6px)' }}
      >
        <Box
          position="relative"
          minH={{ base: '260px', md: '300px' }}
          overflow="hidden"
          borderRadius={{ base: '20px', md: '28px' }}
        >
          <Image
            src={post.thumbnail}
            alt={post.title}
            placeholder="blur"
            layout="fill"
            objectFit="cover"
            sizes="(max-width: 62em) 100vw, 50vw"
          />
          <Box
            position="absolute"
            inset={0}
            background="linear-gradient(180deg, rgba(6,10,16,.55) 0%, rgba(6,10,16,.15) 42%, rgba(6,10,16,.75) 100%)"
          />
          <Flex
            position="absolute"
            inset={0}
            zIndex={1}
            direction="column"
            justify="space-between"
            p={{ base: 6, md: 8 }}
            color="white"
          >
            <Flex justify="space-between" align="center">
              <Text className="eyebrow" color="whiteAlpha.900">
                {platformLabels[post.platform] || post.platform}
              </Text>
              <Text fontFamily="mono" fontSize="sm" color="whiteAlpha.800">
                {displayIndex} / {displayTotal}
              </Text>
            </Flex>
          </Flex>
        </Box>
      </Box>
      <Flex
        borderBottom="1px solid"
        borderColor={border}
        py={5}
        gap={5}
        align="flex-start"
        justify="space-between"
      >
        <Heading
          as="h3"
          fontSize={{ base: 'xl', md: '2xl' }}
          letterSpacing="-0.035em"
          lineHeight="1.2"
        >
          {post.title}
        </Heading>
        <Flex
          flexShrink={0}
          w="42px"
          h="42px"
          border="1px solid"
          borderColor={border}
          borderRadius="full"
          align="center"
          justify="center"
          transition="all .25s ease"
          _groupHover={{
            bg: 'brand.500',
            color: 'white',
            borderColor: 'brand.500',
            transform: 'rotate(-20deg)'
          }}
        >
          <ArrowForwardIcon />
        </Flex>
      </Flex>
    </LinkBox>
  )
}

export default PostCard
