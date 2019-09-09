import { createTheme } from '../helpers/createTheme';
import borders from '../tokens/borders';
import typography from '../tokens/typography';


export default {
  borders: Object.entries(borders).reduce((obj, [name, properties]) => ({
    ...obj,
    [name]: createTheme(`rcx-borders-${ name }`, properties),
  }), {}),
  typography: Object.entries(typography).reduce((obj, [name, properties]) => ({
    ...obj,
    [name]: createTheme(`rcx-typography-${ name }`, properties),
  }), {}),
};
