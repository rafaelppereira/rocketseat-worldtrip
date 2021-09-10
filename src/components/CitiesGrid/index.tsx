import { Flex, Heading, SimpleGrid, FlexProps } from '@chakra-ui/react'
import { CitiesCard } from './CitiesCard'

interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface CitiesGridProps extends FlexProps {
  cities: City[];
}

export function CitiesGrid({
  cities,
  ...rest
}: CitiesGridProps) {
  return (
    <Flex
      direction='column'
      width='100%'
      {...rest}
    >
      <Heading fontSize={['24', '48']}>Cidades {cities.length > 100 ? '100+' : cities.length}</Heading>
      <SimpleGrid minChildWidth='256px' gap='45px' mt='12'>
        {cities.map(city =>
          <CitiesCard key={city.id} city={city} />
        )}
      </SimpleGrid>
    </Flex>
  )
}