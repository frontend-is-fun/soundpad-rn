import {atom} from 'jotai';
import {CategoryType} from '../../views/home/home';

const categories: CategoryType[] = [
  {
    id: 1,
    title: '音效1',
  },
  {
    id: 2,
    title: '音效2',
  },
];

const categoriesStore = atom<CategoryType>(categories[0]);

export {categories, categoriesStore};
