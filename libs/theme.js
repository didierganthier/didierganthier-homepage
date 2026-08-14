import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    html: {
      scrollBehavior: 'smooth'
    },
    body: {
      bg: mode('#F7F5F0', '#0D1117')(props),
      color: mode('#101820', '#F6F2E9')(props),
      transitionProperty: 'background-color',
      transitionDuration: '200ms'
    },
    '::selection': {
      background: '#E85D3F',
      color: '#fff'
    },
    '.eyebrow': {
      fontFamily: 'DM Mono, monospace',
      fontSize: '12px',
      fontWeight: '500',
      letterSpacing: '.11em',
      lineHeight: '1.5',
      textTransform: 'uppercase'
    }
  })
}

const components = {
  Button: {
    baseStyle: {
      borderRadius: '999px',
      fontWeight: '700',
      transition: 'all .2s ease'
    }
  },
  Heading: {
    baseStyle: {
      fontWeight: '700'
    },
    variants: {
      'section-title': {
        fontSize: 20,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: {
      textUnderlineOffset: '3px'
    }
  },
  Container: {
    baseStyle: {
      px: { base: 5, md: 8 }
    }
  }
}

const fonts = {
  heading: 'Manrope, system-ui, sans-serif',
  body: 'Manrope, system-ui, sans-serif',
  mono: 'DM Mono, monospace'
}

const colors = {
  brand: {
    50: '#FFF0EC',
    100: '#FFD8CE',
    200: '#FFB4A3',
    300: '#FA8A72',
    400: '#F06E52',
    500: '#E85D3F',
    600: '#C84429',
    700: '#9E301B',
    800: '#722113',
    900: '#43120B'
  }
}

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
}

const theme = extendTheme({
  config,
  styles,
  components,
  fonts,
  colors,
  sizes: {
    container: {
      xl: '1280px'
    }
  }
})

export default theme
