import { Box, Text, Flex, BackgroundProps } from '@chakra-ui/react';
import Link from 'next/link';

interface ContinentDetailProps {
  href: string;
  title: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
}

export function ContinentDetail({
  title,
  href,
  description,
  imageUrl,
  imagePosition = 'center'
}: ContinentDetailProps) {
  return (
    <Box
      bgImage={imageUrl}
      bgRepeat='no-repeat'
      bgSize='cover'
      bgPosition={imagePosition}
      color='default.light.text'
      h='100%'
      w='100%'
    >
      <Link href={href} passHref>
        <Flex
          as='a'
          direction='column'
          justifyContent='center'
          align='center'
          flex='1'
          h='100%'
          w='100%'
        >
          <Text
            fontSize={['24', '48']}
            fontWeight='bold'
          >
            {title}
          </Text>
          <Text
            fontSize={['12', '24']}
          >
            {description}
          </Text>
        </Flex>
      </Link>
    </Box>
  )
}