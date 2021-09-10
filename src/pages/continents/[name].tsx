import Head from 'next/head';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

import { ContinentBanner } from '../../components/ContinentBanner';
import { ContinentInfo } from '../../components/ContinentInfo';
import { CitiesGrid } from '../../components/CitiesGrid';

import { api } from '../../services/api';
import { unsplashApi } from '../../services/unsplashApi';

interface Continent {
  id: string;
  title: string;
  description: string;
  image: string;
  betterImagePosition: string;
  bio?: string;
  countries: number;
  cities: number;
  languages: number;
}

interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface ContinentsProps {
  continent: Continent;
  cities: City[];
}

export default function Continents({
  continent,
  cities,
}: ContinentsProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <>
      <Head>
        <title>{continent.title} | WorldTrip</title>
      </Head>
      <Flex w='100%' direction='column' pb='12'>
        <ContinentBanner
          bgImage={continent.image}
          bgPosition={continent.betterImagePosition}
          bgSize='cover'
          continentName={continent.title}
        />
        <Box maxW='1240px' px='10' marginX='auto'>
          <Flex
            justify='space-between'
            align='center'
            width='100%'
            minH={isWideVersion ? 'auto' : '300px'}
            direction={isWideVersion ? 'row' : 'column'}
          >
            <Box flex='1' width='100%'>
              <Text as='p' fontSize={['md', 'lg']} align='justify' width='100%' color="default.dark.text">
                {continent.bio ?? 'Not implemented'}
              </Text>
            </Box>
            <ContinentInfo
              countries={continent.countries ?? 0}
              languages={continent.languages ?? 0}
              cities={continent.cities ?? 0}
            />
          </Flex>
          <CitiesGrid cities={cities} mt='16' />
        </Box>
      </Flex >
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params;
  const continentsResponse = await api.get(`/continents/${String(name)}`)
  const continent = continentsResponse.data;

  const citiesResponse = await api.get(`/cities?continent=${String(name)}`)
  const citiesData = citiesResponse.data;
  const cities: City[] = await Promise.all(citiesData.map(async (city: City) => {
    const unsplashResponse = await unsplashApi
      .get(encodeURI(`/search/photos?page=1&per_page=1&query=${city.id}`));
    return {
      ...city,
      image: unsplashResponse.data.results[0].urls.raw,
    }
  }))

  return {
    props: {
      continent,
      cities
    }
  }
}