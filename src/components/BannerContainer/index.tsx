import { ReactNode } from 'react';
import { Flex } from '@chakra-ui/react';

interface BannerContainerProps {
  bgImage: string;
  bgSize: string;
  bgPosition: string;
  height: string;
  children: ReactNode;
}

export function BannerContainer({ 
  bgImage,
  bgSize,
  bgPosition = "center",
  height,
  children,
 }: BannerContainerProps) {
  return (
    <Flex
      direction='row'
      width="100%"
      height={height}
      bgImage={bgImage}
      bgRepeat='no-repeat'
      bgSize={bgSize}
      bgPosition={bgPosition}
      justify='space-evenly'
      mb={['14', '28']}
    >
      { children }
    </Flex>
  );
}