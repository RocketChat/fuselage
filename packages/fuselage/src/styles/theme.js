import { createTheme } from '../helpers/createTheme';
import borders from '../tokens/borders';
import transitions from '../tokens/transitions';
import typography from '../tokens/typography';


export default {
  borders: Object.entries(borders).reduce((obj, [name, properties]) => ({
    ...obj,
    [name]: createTheme(`rcx-borders-${ name }`, properties),
  }), {}),
  transitions: createTheme('rcx-transitions', transitions),
  typography: Object.entries(typography).reduce((obj, [name, properties]) => ({
    ...obj,
    [name]: createTheme(`rcx-typography-${ name }`, properties),
  }), {}),
};
