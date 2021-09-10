import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { ContinentAdditionalInfo } from './ContinentAdditionalInfo';

interface ContinentInfoCardProps {
  value: number;
  kind: 'countries' | 'cities' | 'languages';
}

export function ContinentInfoCard({
  value,
  kind,
}: ContinentInfoCardProps) {
  let kindComplete = '';
  switch (kind) {
    case 'countries':
      kindComplete = 'países';
      break;
    case 'cities':
      kindComplete = 'cidades';
      break;
    case 'languages':
      kindComplete = 'línguas';
      break;
    default:
      kindComplete = 'not implemented';
      break;
  }

  return (
    <Flex
      direction='column'
      fontSize={['1xl', '2xl']}
      align='center'
    >
      <Text fontSize={['20', '38']} fontWeight='semibold' color='default.highlight'>
        {value > 100 ? value - 100 : value}
      </Text>
      <Text fontWeight='semibold'>
        {(value > 100)
          ? (
            <>
              {kindComplete} +100{' '}
              <ContinentAdditionalInfo informationBody={`${value} ${kindComplete}`} />
            </>
          ) : <>{kindComplete}</>
        }
      </Text>
    </Flex>
  )
}