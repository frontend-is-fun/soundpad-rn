import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './index.module.scss';

export default function (props: any) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View>
          <Text>s</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
