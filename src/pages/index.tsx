import { GetStaticProps } from 'next';
import Head from 'next/head';

import { HomeBanner } from '../components/HomeBanner';
import { TravelTypes } from '../components/TravelTypes';
import { ContinentSlides } from '../components/ContinentSlides';

import { Flex, Box, Divider } from '@chakra-ui/react';

import { api } from '../services/api';

interface HomeProps {
  continents: {
    id: string;
    title: string;
    description: string;
    image: string;
    betterImagePosition: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <>
      <Head>
        <title>Worldtrip | Tire a sua viagem do papel 💛</title>
      </Head>
      <Flex w='100%' direction='column' pb='12'>
        <HomeBanner />
        <TravelTypes />
        <Box flex='1' width={['60px', '90px']} marginX='auto' my={['10', "20"]}>
          <Divider
            border='2px'
            borderColor='body.color'
          />
        </Box>
        <ContinentSlides continents={continents} />
      </Flex>
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const response = await api.get('/continents');
  const continents = response.data;
  return {
    props: {
      continents,
    }
  }
}