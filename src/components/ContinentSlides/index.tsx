import { VStack, Flex, Box, Text } from '@chakra-ui/react';

import { ContinentDetail } from './ContinentDetail';
import Carousel from '../Carousel';

interface ContinentsSlideProps {
  continents: {
    id: string;
    title: string;
    description: string;
    image: string;
    betterImagePosition: string;
  }[];
}

export function ContinentSlides({ continents }: ContinentsSlideProps) {
  
  const carouselContent = continents.map(continent => (
    <ContinentDetail
      key={continent.id}
      title={continent.title}
      description={continent.description}
      imageUrl={continent.image}
      imagePosition={continent.betterImagePosition}
      href={`/continents/${continent.id}`}
    />
  ))
  
  return (
    <VStack spacing='8'>
      <Flex direction='column' align='center' justify='space-between'>
        <Text fontSize={['xl', '3xl']} fontWeight="500" color="default.dark.text" >Vamos nessa?</Text>
        <Text fontSize={['xl', '3xl']} fontWeight="500" color="default.dark.text">Então escolha seu continente</Text>
      </Flex>
      <Box maxW='1240px' w='100%' h='450px' position="relative" >
        <Carousel content={carouselContent} />
      </Box>
    </VStack>
  );
}