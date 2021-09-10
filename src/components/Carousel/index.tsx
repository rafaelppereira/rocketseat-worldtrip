import React, { ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from '@chakra-ui/react';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper';

SwiperCore.use([Navigation, Pagination]);

interface CarouselProps {
  content: ReactNode[];
}

export default function Carousel({
  content,
}: CarouselProps) {
  return (
    <Box
      w='100%'
      h='450px'
      sx={{
        '--swiper-navigation-color': 'colors.highlight.500',
        '--swiper-pagination-bullet-active': 'colors.default.highlight',
        '--swiper-pagination-bullet': 'colors.default.dark.text',
        '--swiper-navigation-size': '32px',

        '.swiper-pagination-bullet': {
          'background-color': 'var(--swiper-pagination-bullet)'
        },

        '.swiper-pagination-bullet-active': {
          'background-color': 'var(--swiper-pagination-bullet-active)'
        },

        ".swiper": {
          'width': '100%',
          'height': '450px',
          'border-radius': '10px'
        },

      }}
      >
      <Swiper navigation={true} pagination={true}>
        {content?.map(item =>
          <SwiperSlide>{item}</SwiperSlide>
        )}
      </Swiper>
    </Box >
  );
}