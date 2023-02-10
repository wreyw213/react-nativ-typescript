export const Colors = {
  RED: 'red',
  FEILD_PLACEHOLDER: '#999999',
  WHITE: 'white',
  BLACK: '#333333',
  TRANSPARENT: 'transparent',

  SKY: '#1BA7E7',
  SHADOW_COLOR: '#727272',
  CONTAINER_BACKGROUND_COLOR: '#E5E5E5',
  LIGHT_GREY: '#D8D8D8',
  DARK_GREY: '#989898',
  GREEN: '#25D482',

  TAB_BACKGROUND: '#F4F4F4',
  TAB_ITEM: '#999999',
  C4C4C4: '#C4C4C4',
  CDCDCD: '#CDCDCD',
  EBEBEB: '#EBEBEB',
  DFDFDF: '#DFDFDF',
  E7E7E7: '#E7E7E7',
  DARK_BLUE: '#081046',
  LIGHT_BLUE: '#08104699',
  A666666: '#666666',
  C7C7B6: '#C7C7B6',
  B4FFA8: '#B4FFA8',
  B9DFF8: '#B9DFF8',
  EAECEE: '#EAECEE',
  FF2741: '#FF2741',
  COLOR_3A3C3F: '#3A3C3F',
  DARK_BLACK: '#000000',
  COLOR_979797: '#979797',
  COLOR_E3F3FB: '#E3F3FB',
  COLOR_BUTTON: '#051244',
  BLUE: '#2960FF',
  MESSAGE_RECIVE_COLOR: '#F0F0F0',
  F4F3F4: '#f4f3f4'
}

/**
 * Limitations of this approach 
 * 1. can't add custom Theme
 * 2. have to predifene all colors for all defiend theme
 */

export default {
  BG_PRIMARY: {
    dark: Colors.BLACK,
    light: Colors.WHITE
  },
  BG_SECONDRY: {
    dark: Colors.WHITE,
    light: Colors.BLACK
  },
  TXT_PRIMARY: {
    dark: Colors.WHITE,
    light: Colors.BLACK
  },
  TXT_SECONDARY: {
    dark: Colors.BLACK,
    light: Colors.WHITE
  }
}