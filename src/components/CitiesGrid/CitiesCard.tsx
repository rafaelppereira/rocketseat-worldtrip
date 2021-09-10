import { Flex, Text, Avatar, Box, Image, useColorModeValue } from '@chakra-ui/react';
interface City {
  id: string;
  name: string;
  country: string;
  flag?: string;
  continent: string;
  image?: string;
}

interface CitiesCardProps {
  city: City;
}

export function CitiesCard({
  city
}: CitiesCardProps) {
  const countryUrl = (city.flag ?? city.country).replace(/[[:blank:]]/g, '-').toLocaleLowerCase();
  const avatarUrl =
    `https://n.i.uol.com.br/licaodecasa/ensfundamental/geografia/bandeiras/${countryUrl}.gif`;

  const cardBgColor = useColorModeValue('default.white', 'default.black')
  return (
    <Flex
      direction='column'
      bg={cardBgColor}
      borderColor='default.highlight'
      borderWidth='1px'
      borderRadius='8'

    >
      <Image
        width="100%"
        height="173px"
        objectFit='cover'
        src={city.image}
        borderTopRadius='8'
      />
      <Flex
        direction='row'
        flex='1'
        justify='space-evenly'
        width='100%'
        height='100%'
        p='6'
      >
        <Flex direction='column' flex='2' justify='center' align='flex-start'>
          <Text fontWeight='semibold' fontSize='20'  color="default.dark.text">{city.name}</Text>
          <Text color='default.dark.info' fontSize='16'>{city.country}</Text>
        </Flex>
        <Flex
          justify='center'
          align='center'
          flex='1'
        >
          <Avatar name={city.country} src={avatarUrl} size='sm' />
        </Flex>
      </Flex>
    </Flex>
  )
}