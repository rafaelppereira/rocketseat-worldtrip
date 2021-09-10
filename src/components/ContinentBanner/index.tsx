import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
  useBreakpointValue
} from '@chakra-ui/react'
import { BannerContainer } from '../BannerContainer'

interface ContinentBannerProps {
  bgImage: string;
  bgSize: string;
  bgPosition: string;
  continentName: string;
}

export function ContinentBanner({
  bgImage,
  bgPosition,
  bgSize,
  continentName,
}: ContinentBannerProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <BannerContainer
      bgImage={bgImage}
      bgSize={bgSize}
      bgPosition={bgPosition}
      height={isWideVersion ? '500px' : '150px'}
    >
      <Flex
        width='100%'
        height='100%'
        flex='1'
        align={isWideVersion ? 'flex-end' : 'center'}
        justify={isWideVersion ? '' : 'center'}
        p={isWideVersion ? '12' : '0'}
        maxW="1280px"
        m="0 auto"
      >
        <Heading
          fontSize={isWideVersion ? '56' : '28'}
          color='default.light.text'
        >
          {continentName}
        </Heading>
      </Flex>
    </BannerContainer>
  )
}