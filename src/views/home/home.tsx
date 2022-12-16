import * as React from 'react';

import {View, Text, Button} from 'react-native';

// sub components import
import Category from './components/category';
import PadList from './components/pad-list';
import styles from './home.module.scss';

type Props = {
  navigation: any;
};

// 使用 jotai 传递当前分类
export type CategoryType = {
  id: number;
  title: string;
};

export default function HomeView(props: Props) {
  return (
    <View style={styles.container}>
      <Category />
      <PadList />
      <Button
        title="Go to Test2"
        onPress={() => {
          console.log(1);
          props.navigation.navigate('Profile');
        }}
      />
      {/*test*/}
      <Text>sss</Text>
      <Text>sss</Text>
    </View>
  );
}
