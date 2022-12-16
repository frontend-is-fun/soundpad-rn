import * as React from 'react';

import {SafeAreaView, View, Text, Button} from 'react-native';

import styles from './home.module.scss';

type Props = {
  navigation: any;
};

export default function HomeView(props: Props) {
  return (
    <SafeAreaView
      style={{
        height: '100%',
      }}>
      <View style={styles.container}>
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
    </SafeAreaView>
  );
}
