import * as React from 'react';

import {useAtom} from 'jotai';
import {TouchableOpacity, View, Text} from 'react-native';

import {CategoryType} from '../../home';
import {categories, categoriesStore} from '../../../../data/store/category';
import styles from './index.module.scss';

export default function () {
  const [currentCategory, setCurrentCategory] = useAtom(categoriesStore);

  return (
    <View style={styles.container}>
      {categories.map((item: CategoryType) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => {
            setCurrentCategory(
              categories.find(
                (category: CategoryType) => category.id === item.id,
              ) as CategoryType,
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
