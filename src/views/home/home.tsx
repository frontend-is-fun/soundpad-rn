import * as React from 'react';

import {SafeAreaView, Text, Button} from 'react-native';

type Props = {
  navigation: any;
};

export default function HomeView(props: Props) {
  return (
    <SafeAreaView
      style={{
        height: '100%',
      }}>
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
    </SafeAreaView>
  );
}
