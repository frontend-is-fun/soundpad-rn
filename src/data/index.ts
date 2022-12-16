import fxList from './fx-list';
import memeList from './meme-list';
import {PadBlockProps} from '../types';

type ListProps = {
  [key: string]: PadBlockProps[];
};

const soundEffectList: ListProps = {
  1: fxList,
  2: memeList,
};

export default soundEffectList;
