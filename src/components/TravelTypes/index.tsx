import { Flex, Box, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { TravelTypeItem } from './TravelTypeItem';

const travelTypeItems = [
  { title: 'vida noturna', image: '/icon_01.svg' },
  { title: 'praia', image: '/icon_02.svg' },
  { title: 'moderno', image: '/icon_03.svg' },
  { title: 'clássico', image: '/icon_04.svg' },
  { title: 'e mais...', image: '/icon_05.svg' },
]

export function TravelTypes() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      minH='145px'
      marginX='auto'
      w="100%"
      justify="center"
    >
      <Box
        flex="1"
        maxW="1160px"
      >
        <SimpleGrid
          flex="1"
          align="center"
          minChildWidth="145px"
          spacing="40px"
        >
        
          {travelTypeItems.map(item => 
            <TravelTypeItem 
              key={item.title}
              title={item.title}
              image={item.image}
              isWideVersion={isWideVersion}
            />  
          )}

        </SimpleGrid>

      </Box>
    </Flex>
  );
}