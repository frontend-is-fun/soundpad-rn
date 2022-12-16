import * as React from 'react';

import {TouchableOpacity, View, Text} from 'react-native';
import {useAtom} from 'jotai';
import {categories, categoriesStore} from '../../../../data/store/category';
import soundEffectList from '../../../../data/index';

import styles from './index.module.scss';

export default function () {
  const [currentCategory] = useAtom(categoriesStore);
  // 这里的 currentCategory 是一个对象，包含 id 和 title
  // 如果在 soundEffectList 中找到了当前分类的 id，就返回当前分类的所有数据
  const currentCategoryData = soundEffectList[currentCategory.id];

  return (
    <View style={styles.container}>
      {currentCategoryData.map((item: any) => (
        <Text>{item.emoji}</Text>
      ))}
    </View>
  );
}