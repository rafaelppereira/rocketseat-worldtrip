import { BannerContainer } from '../BannerContainer';

import { Stack, Heading, Text, Box, Image, useBreakpointValue } from '@chakra-ui/react';

export function HomeBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return(
    <BannerContainer
      bgImage='/banner-background.png'
      bgSize="cover"
      height="335px"
      bgPosition="top"
    >
      <Stack
        direction='column'
        p="8"
        justify="center"
        spacing="5"
      >
        <Heading
          size={!!isWideVersion ? 'lg' : 'md'}
          color="gray.50"
          fontWeight="500"
        >
          5 continentes,<br />
          infinitas possibilidades.
        </Heading>
        <Text
          color="gray.50"
        >
          Chegou a hora de tirar do papel a viagem que você<br />
          sempre sonhou.
        </Text>
      </Stack>

      {isWideVersion && (
        <Box>
          <Image
            src="/airplane.svg"
            alt="airplane"
            mt="76px"
          />
        </Box>
      )}
    </BannerContainer>
  );
}