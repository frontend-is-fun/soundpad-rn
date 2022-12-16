import * as React from 'react';

import {atom, useAtom} from 'jotai';
import {TouchableOpacity, View, Text} from 'react-native';

import {Category} from '../../home';

import styles from './index.module.scss';

const categories: Category[] = [
  {
    id: 1,
    title: '音效',
  },
  {
    id: 2,
    title: '音乐',
  },
];

const categoryAtom = atom<Category>(categories[0]);

export default function () {
  const [currentCategory, setCurrentCategory] = useAtom(categoryAtom);

  return (
    <View style={styles.container}>
      {categories.map((item: Category) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            setCurrentCategory(
              categories.find(
                (category: Category) => category.id === item.id,
              ) as Category,
            );
          }}>
          <View
            style={
              item.id === currentCategory.id
                ? styles.categoryBoxActive
                : styles.categoryBox
            }>
            <Text>{item.title}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}
