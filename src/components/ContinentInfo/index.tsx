import { Flex, Text, Box } from '@chakra-ui/react';
import { ContinentInfoCard } from './ContinentInfoCard';

interface ContinentInfoProps {
  countries: number;
  cities: number;
  languages: number;
}

export function ContinentInfo({
  countries,
  cities,
  languages,
}: ContinentInfoProps) {
  return (
    <Flex
      flex='1'
      width='100%'
      direction='row'
      justify="space-around"
      align="center"
      as='div'
      color="default.dark.text"
    >
      <ContinentInfoCard value={countries} kind='countries' />
      <ContinentInfoCard value={languages} kind='languages' />
      <ContinentInfoCard value={cities} kind='cities' />
    </Flex>
  )
}