import { createTheme } from '../helpers/createTheme';
import borders from '../tokens/borders';
import transitions from '../tokens/transitions';


export default createTheme('rcx-dimensions', {
  transitions: createTheme('rcx-transitions', transitions),
  borders: Object.entries(borders).reduce((obj, [name, properties]) => ({
    ...obj,
    [name]: createTheme(`rcx-borders-${ name }`, properties),
  }), {}),
});
