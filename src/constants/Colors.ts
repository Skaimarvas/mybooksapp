const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';

export default {
  regular: {
    white: 'rgba(255, 255, 255, 1)',
    orange: 'rgba(221, 93, 0, 1)',
    orange2: 'rgba(248, 159, 39, 1)',
    grey: 'rgba(113, 128, 134, 1)',
    blue: 'rgba(52, 152, 219, 1)',
    green: 'rgba(39, 174, 96, 1)',
    red: 'rgba(192, 57, 43, 1)',
    overlay: 'rgba(77, 77, 77, 0.75)',
    background: 'rgba(245, 246, 248, 1)',
    text: 'rgba(77, 77, 77, 1)',
  },
  light: {
    background: '#F5F6F8',
    iconBackground: 'rgba(255, 255, 255, 0)',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    orange: 'rgba(221, 93, 0, 0.12)',
    grey: 'rgba(113, 128, 134, .08)',
    blue: 'rgba(52, 152, 219, .12)',
    green: 'rgba(39, 174, 96, .12)',
    red: 'rgba(192, 57, 43, .12)',
    black: 'rgba(0,0,0,.12)',
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};
