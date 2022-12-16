import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './index.module.scss';
import {PadBlockProps} from '../../types';

type PropsType = {
  info: PadBlockProps;
};

export default function (props: PropsType) {
  const {info} = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.padC}>
          <View style={styles.textWrapper}>
            <Text
              style={{
                fontSize: 64,
              }}>
              {info.emoji}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
