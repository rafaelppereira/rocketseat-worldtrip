import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    default: {
      'highlight': '#ffba08',
      'white': '#ffffff',
      'black': '#000000',
      'dark': {
        'text': '#47585b',
        'info': '#999999',
        'background': "#181b23",
      },
      'light': {
        'text': '#f5f8fa',
        'info': '#dadada',
        'background': '#f5f8fa',
      }
    }
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.300'
      }
    }
  }
})