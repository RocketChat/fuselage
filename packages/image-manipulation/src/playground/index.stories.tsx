import ImageManipulation from '..';
import {
  landscapeImage,
  portraitImage,
  squareImage,
  tallImage,
  wideImage,
} from './images';

export default {
  title: 'Playground',
  component: ImageManipulation,
};

export const Default = () => (
  <ImageManipulation imgSrc={landscapeImage} width='90vw' height='80vh' />
);

export const Tall = () => (
  <ImageManipulation imgSrc={tallImage} width='90vw' height='80vh' />
);

export const Wide = () => (
  <ImageManipulation imgSrc={wideImage} width='90vw' height='80vh' />
);

export const Square = () => (
  <ImageManipulation imgSrc={squareImage} width='90vw' height='80vh' />
);

export const Portrait = () => (
  <ImageManipulation imgSrc={portraitImage} width='90vw' height='80vh' />
);
