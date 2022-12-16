import * as React from 'react';

import {SafeAreaView, Text, Button} from 'react-native';

export default function Test1({navigation}) {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'blue',
      }}>
      <Button
        title="Go to Test2"
        onPress={() => {
          console.log(1);
          navigation.navigate('Profile');
        }}
      />
      {/*test*/}
      {/*</Button>*/}
      <Text>111</Text>
      <Text>111</Text>
      <Text>111</Text>
      <Text>111</Text>
      <Text>111</Text>
      <Text>111</Text>
      <Text>111</Text>
      <Text>111</Text>
    </SafeAreaView>
  );
}
