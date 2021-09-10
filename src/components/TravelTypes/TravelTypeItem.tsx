import { Flex, Image, Text, theme } from '@chakra-ui/react';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri'

interface TravelTypeItemProps {
  title: string;
  image: string;
  isWideVersion?: boolean;
}

export function TravelTypeItem({ title, image, isWideVersion = true }: TravelTypeItemProps) {
  return (
    <Flex
      direction={isWideVersion ? 'column' : 'row'}
      justify='center'
      align='center'
    >
      {isWideVersion ? (
        <Image
          src={image}
          alt={title}
          size='5.3125rem'
        />
      ) : (
        <RiCheckboxBlankCircleFill
          color="var(--chakra-colors-default-highlight)"
          size='8px'
        />
      )}
      <Text
        fontWeight='semibold'
        size={isWideVersion ? 'lg' : 'md'}
        mt={isWideVersion ? '6' : ''}
        ml={isWideVersion ? '' : '4'}
        color="default.dark.text"
      >
        {title}
      </Text>
    </Flex>
  );
}